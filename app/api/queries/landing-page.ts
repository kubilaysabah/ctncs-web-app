import { gql } from "@apollo/client";

export const GET_LANDING_PAGE = gql`
  query GetLandingPage($slug: String!, $locales: [Locale!]!) {
    landingPages(where: {meta: {slug: $slug}}, locales: $locales) {
        id
        meta {
            id
            noIndex
            title
            description
            keywords
            author
            slug
            openGraphImage {
                id
                width
                height
                url(transformation: {document: {output: {format: webp}}})
            }
        }
        header {
            ... on HeaderWithNavigation {
                id
                menu {
                id
                label
                externalUrl
                children {
                    id
                    label
                    externalUrl
                    page {
                        meta {
                            slug
                        }
                    }
                }
                page {
                    meta {
                        slug
                    }
                }
                }
                logo {
                    id
                    width
                    height
                    url(transformation: {document: {output: {format: webp}}})
                }
            }
        }
        sections {
            ... on Banner {
                id
                title
                description
                alt
                over
                textPosition
                background {
                    id
                    url(transformation: {document: {output: {format: webp}}})
                    width
                    height
                }
                desktop {
                    id
                    url(transformation: {document: {output: {format: webp}}})
                    width
                    height
                }
                tablet {
                    id
                    url(transformation: {document: {output: {format: webp}}})
                    width
                    height
                }
                mobile {
                    id
                    url(transformation: {document: {output: {format: webp}}})
                    width
                    height
                }
            }
            ... on Carousel {
                id
                title
                description
                order
                buttonText
                externalUrl
                page {
                    meta {
                        slug
                    }
                }
                banner {
                    id
                    alt
                    title
                    description
                    over
                    background {
                        id
                        width
                        height
                        url(transformation: {document: {output: {format: webp}}})
                    }
                    desktop {
                        id
                        url(transformation: {document: {output: {format: webp}}})
                        width
                        height
                    }
                    tablet {
                        id
                        url(transformation: {document: {output: {format: webp}}})
                        width
                        height
                    }
                    mobile {
                        id
                        url(transformation: {document: {output: {format: webp}}})
                        width
                        height
                    }
                }
            }
        }
    }
}`;