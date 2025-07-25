export type SEO = {
    id: string;
    noIndex: boolean;
    title: string | null;
    description: string | null;
    keywords: string[] | null;
    author: string | null;
    slug: string;
    openGraphImage: {
        id: string;
        width: number;
        height: number;
        url: string;
    }
}