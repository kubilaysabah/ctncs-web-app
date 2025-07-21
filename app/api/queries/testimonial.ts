import { gql } from "@apollo/client";

export const GET_TESTIMONIAL = gql`
  query GetTestimonial($first: Int!, $locales: [Locale!]!) {
    testimonials(first: $first, locales: $locales) {
        id
        title
        comment
        fullName
    }
  }
`;