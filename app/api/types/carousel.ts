import type { Banner } from '~/api/types/banner';

export type Carousel = {
    id: string;
    title: string | null;
    description: string | null;
    order: number | null;
    buttonText: string | null;
    externalUrl: string | null;
    page: {
        meta: {
            slug: string | null;
        }
    }
    banner: Banner | null;
}