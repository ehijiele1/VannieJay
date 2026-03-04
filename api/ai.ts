import type { VercelRequest, VercelResponse } from '@vercel/node';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || 'llama3';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt, messages, model = DEFAULT_MODEL, stream = false } = req.body;

    try {
        const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                messages: messages || [{ role: 'user', content: prompt }],
                stream,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return res.status(response.status).json({
                error: 'Ollama API error',
                details: errorData
            });
        }

        if (stream) {
            // Set headers for streaming
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            const reader = response.body?.getReader();
            if (!reader) {
                return res.status(500).json({ error: 'Failed to get response reader' });
            }

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
    } catch (error) {
        console.error('Ollama Proxy Error:', error);
        res.status(500).json({
            error: 'Failed to connect to Ollama',
            message: error instanceof Error ? error.message : String(error)
        });
    }
}
