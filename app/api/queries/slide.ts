import { gql } from "@apollo/client";

export const GET_SLIDES = gql`
  query GetSlides ($first: Int = 100, $locales: [Locale!] = [tr_TR]) {
    slides(first: $first, locales: $locales) {
        id
        title
        description
        url
        buttonText
        mobileBanner {
            id
            url
            width
            height
        }
        desktopBanner {
            id
            url
            width
            height
        }
    }
  }
`;