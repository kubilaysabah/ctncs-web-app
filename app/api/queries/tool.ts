import { gql } from "@apollo/client";

export const GET_TOOLS = gql`
  query GetTools ($first: Int = 100, $locales: [Locale!] = [tr_TR]) {
    tools(first: $first, locales: $locales) {
        id
        icon {
            url
        }
        title
        desc
    }
  }
`;