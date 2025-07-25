export type Image = {
    id: string;
    width: number;
    height: number;
    url: string;
}

export type Banner = {
    id: string;
    title: string | null;
    description: string | null;
    alt: string | null;
    over: boolean;
    textPosition: 'left' | 'right' | 'center' | 'up' | 'down' | null;
    background: Image | null;
    desktop: Image | null;
    tablet: Image | null;
    mobile: Image | null;
}