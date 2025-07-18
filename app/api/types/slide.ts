export type Slide = {
    id: string;
    title: string;
    description: string;
    url: string;
    buttonText: string;
    mobileBanner: {
        id: string;
        url: string;
        width: number;
        height: number;
    };
    desktopBanner: {
        id: string;
        url: string;
        width: number;
        height: number;
    };
}