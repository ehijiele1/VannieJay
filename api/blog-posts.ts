typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getPosts } from '../lib/hashnode';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const posts = await getPosts(10);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
`