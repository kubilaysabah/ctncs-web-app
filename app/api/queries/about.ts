import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query GetAbout($first: Int!, $locales: [Locale!]!) {
    abouts(first: $first, locales: $locales) {
      id
      title
      desc
      buttonText
      url
      image {
        id
        width
        height
        url
      }
    }
  }
`;