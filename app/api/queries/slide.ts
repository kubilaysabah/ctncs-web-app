import * as Apollo from "@apollo/client";

export const GET_SLIDES = Apollo.gql`
  query GetSlides {
    slides {
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