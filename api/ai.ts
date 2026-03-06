import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as Data from '../lib/business-data';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const DEFAULT_PROVIDER = process.env.AI_PROVIDER || (GROQ_API_KEY ? 'groq' : 'ollama');

// Factory to create dynamic system prompt
const generateSystemPrompt = () => {
    let prompt = `You are the ${Data.BRAND_NAME} Strategic Assistant. Your goal is to guide clients towards wealth-building opportunities.

${Data.BRAND_STATEMENT}

### Core Projects & Products
${Data.PRODUCTS.map((p, i) => `${i + 1}. **${p.name}** (${p.location})
   - *Type*: ${p.type}
   - *Price*: ${p.price} | ${p.paymentPlan}
   - *Value*: ${p.description}
   - *Link*: [Explore ${p.name}](${p.link})`).join('\n\n')}

### Core Services
${Data.SERVICES.map(s => `- **${s.title}**: ${s.description} ([Details](${s.link}))`).join('\n')}

### Communication Strategy
- **Tone**: Professional, encouraging, and strategic.
- **Formatting**: Use **bold headings** and bullet points.
- **Concierge Habit**: Always ask if the user is interested in "Local (Nigeria)" or "International (USA/Global)" wealth growth.
- **Markdown Links**: Use the format [Label](URL) for all links.
`;
    return prompt;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages, stream = false } = req.body;

    // Inject Dynamic System Prompt
    const fullMessages = [
        { role: 'system', content: generateSystemPrompt() },
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
                    message: errorData.error?.message || `Groq returned status ${response.status}.`,
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
            message: 'Could not connect to AI provider.'
        });
    }
}
