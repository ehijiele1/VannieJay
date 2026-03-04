const HASHNODE_API = 'https://gql.hashnode.com';
const HASHNODE_KEY = import.meta.env.VITE_HASHNODE_API_KEY;
const PUBLICATION_HOST = import.meta.env.VITE_HASHNODE_HOST;

export interface Post {
    id: string;
    title: string;
    brief: string;
    slug: string;
    url: string;
    publishedAt: string;
    readTimeInMinutes: number;
    coverImage?: { url: string };
}

export async function getPosts(first: number = 10): Promise<Post[]> {
    const query = `
    query Publication {
      publication(host: "${PUBLICATION_HOST}") {
        posts(first: ${first}) {
          edges {
            node {
              id
              title
              brief
              slug
              url
              publishedAt
              readTimeInMinutes
              coverImage { url }
            }
          }
        }
      }
    }
  `;

    try {
        const response = await fetch(HASHNODE_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': HASHNODE_KEY || ''
            },
            body: JSON.stringify({ query })
        });

        const json = await response.json();
        if (json.errors) {
            console.error('Hashnode API errors:', json.errors);
            return [];
        }
        return json.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-NG', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}