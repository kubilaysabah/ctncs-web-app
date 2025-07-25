import type { SEO } from '~/api/types/seo';
import type { Menu } from '~/api/types/menu';
import type { Banner, Image } from '~/api/types/banner';
import type { Carousel } from './carousel';

// Discriminated union types for sections
export type BannerSection = Banner & {
    __typename: 'Banner';
};

export type CarouselSection = Carousel & {
    __typename: 'Carousel';
};

// Union type for all possible sections
export type Section = BannerSection | CarouselSection;

export type LandingPage = {
    id: string;
    meta: SEO;
    header: {
        id: string;
        sticky: boolean;
        menu: Menu[] | null;
        logo: Image | null;
    }
    sections: Section[];
}