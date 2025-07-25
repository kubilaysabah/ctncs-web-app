import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query GetMenu($first: Int!, $locales: [Locale!]!) {
    menus (first: $first, locales: $locales, where: { parent: null }) {
      id
      label
      externalUrl
      slug
      children {
        id
        slug
        label
        externalUrl
        children {
          id
          slug
          externalUrl
          label
        }
      }
    }
}`;