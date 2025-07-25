import { useParams } from 'react-router'
import { useQuery } from '@apollo/client';
import { GET_LANDING_PAGE } from '~/api/queries/landing-page';
import type { LandingPage } from '~/api/types/landing-page';
import Header from '~/components/header'
import Footer from '~/components/footer'

export default function LandingPage() {
    const { slug } = useParams<{ slug: string }>();

    const { data, error, loading } = useQuery<{ landingPages: LandingPage[] }>(GET_LANDING_PAGE, {
        variables: {
            locales: ["tr_TR"],
            slug
        }
    });

    console.log('LandingPage data:', data?.landingPages);

    return (
        <>
            <Header />
            <main></main>
            <Footer />
        </>
    )
}