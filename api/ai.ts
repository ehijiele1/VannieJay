import type { VercelRequest, VercelResponse } from '@vercel/node';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const DEFAULT_PROVIDER = process.env.AI_PROVIDER || (GROQ_API_KEY ? 'groq' : 'ollama');

const SYSTEM_PROMPT = `You are the VannieJay Strategic Assistant, a sophisticated AI concierge for VannieJay Business Services. Your goal is to guide clients towards wealth-building opportunities in real estate and global talent.

### VannieJay Identity
VannieJay helps individuals and organizations build long-term wealth through real estate, investment solutions, and strategic support services.

### Core Projects & Products
1. **FarmWey: PalmOrigin** (Location: Ewekoro, Ogun State)
   - *Type*: Oil Palm Investment (Land)
   - *Price*: ₦700,000 | Deposit: 20%
   - *Value*: Gateway to agricultural value chain.
   - *Link*: [/products](https://vanniejay.com.ng/products)

2. **Hill City Estate** (Location: Alagbado, Lagos)
   - *Type*: Residential Mini-City
   - *Price*: ₦15,000,000
   - *Value*: Near Canaanland, resort center facilities.
   - *Link*: [/products](https://vanniejay.com.ng/products)

3. **Ire II** (Location: Obafemi Owode, Ogun State)
   - *Type*: Land Banking / Investment
   - *Price*: ₦8,000,000
   - *Value*: Secured with C of O, high-yield positioning.
   - *Link*: [/products](https://vanniejay.com.ng/products)

4. **RentFlex** (USA/Detroit)
   - *Type*: International Rental Income
   - *Entry*: $10,000
   - *Value*: Monthly USD rental income from property pools.
   - *Link*: [/investment-solutions](https://vanniejay.com.ng/investment-solutions)

5. **Build2Profit** (Dallas/Houston, USA)
   - *Type*: Short-term Development play
   - *ROI*: 18%-25% over 18 months.
   - *Link*: [/investment-solutions](https://vanniejay.com.ng/investment-solutions)

### Core Services
- **Real Estate Services**: Property marketing, advisory, and asset verification. ([/services](https://vanniejay.com.ng/services))
- **Human Capital Ecosystem**:
  - Remote Real Estate Sales Executive roles. ([Apply](https://vanniejay.zohorecruit.com/jobs/Careers))
  - AI & Tech Professionals (SME Careers). ([Apply](https://sme.careers/apply?referral=rp--119bac))
- **Business Support**: Lead generation, WhatsApp marketing setup, and operational excellence for RE/HR sectors. ([/services](https://vanniejay.com.ng/services))

### Communication Strategy
- **Tone**: Professional, encouraging, and strategic.
- **Formatting**: Use **bold headings**, bullet points for lists, and Tables for comparisons.
- **Concierge Habit**: Always ask if the user is interested in "Local (Nigeria)" or "International (USA/Global)" wealth growth to better narrow down products.
- **Markdown Links**: Use the format [Label](URL) for all links.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages, stream = false } = req.body;

    // Inject System Prompt
    const fullMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
    ];

    const provider = DEFAULT_PROVIDER;

    try {
        if (provider === 'groq' && GROQ_API_KEY) {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: fullMessages,
                    stream: stream,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                return res.status(response.status).json({
                    error: 'Cloud AI Error',
                    message: errorData.error?.message || `Groq returned status ${response.status}. Have you set a valid API key?`,
                    details: errorData
                });
            }

            if (stream) {
                res.setHeader('Content-Type', 'text/event-stream');
                res.setHeader('Cache-Control', 'no-cache');
                const reader = response.body?.getReader();
                if (!reader) return res.status(500).json({ error: 'No reader' });
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    res.write(value);
                }
                res.end();
            } else {
                const data = await response.json();
                // Normalize to Ollama-like format for the frontend
                return res.status(200).json({
                    message: {
                        content: data.choices[0].message.content
                    }
                });
            }
        } else {
            // Fallback to Ollama
            const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: process.env.OLLAMA_MODEL || 'llama3',
                    messages: fullMessages,
                    stream: stream,
                }),
            });

            if (!response.ok) {
                return res.status(response.status).json({ error: 'Ollama offline/error' });
            }

            if (stream) {
                res.setHeader('Content-Type', 'text/event-stream');
                const reader = response.body?.getReader();
                if (!reader) return res.status(500).json({ error: 'No reader' });
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    res.write(value);
                }
                res.end();
            } else {
                const data = await response.json();
                res.status(200).json(data);
            }
        }
    } catch (error) {
        console.error('AI Proxy Error:', error);
        res.status(500).json({
            error: 'AI Connection Failed',
            message: 'Could not connect to AI provider. If using local Ollama, ensure it is running. If using cloud, check API keys.'
        });
    }
}
