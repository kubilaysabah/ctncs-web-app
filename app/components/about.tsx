import { useQuery } from '@apollo/client';
import { GET_ABOUT } from '~/api/queries/about';
import type { About } from '~/api/types/about';

interface AboutProps {
    locale?: string;
    count?: number;
}

export default function About({ locale = 'tr_TR', count = 1 }: AboutProps = {}) {
    const { data, error, loading } = useQuery<{ abouts: About[] }>(GET_ABOUT, {
        variables: {
            first: count,
            locales: [locale]
        }
    });

    const about: About | null = data?.abouts?.[0] || null;

    if (!about) {
        return;
    }

    return (
        <section className="py-10">
            <div className="container mx-auto flex flex-wrap">
                <article className="w-full lg:w-1/2">
                    <h2 className="font-semibold lg:text-2xl">{about.title}</h2>
                    <p className="text-sm mt-2">{about.desc}</p>
                    <a className="block mt-5 max-w-fit text-sm font-semibold py-2 px-4 rounded bg-blue-500 text-white" href={about.url}>{about.buttonText}</a>
                </article>
                <picture className="w-full lg:w-auto">
                    {about?.image?.url && <img src={about.image.url} alt={about.title} />}
                </picture>
            </div>
        </section>
    )
}