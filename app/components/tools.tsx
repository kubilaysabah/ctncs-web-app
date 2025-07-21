import { useQuery } from "@apollo/client";
import { GET_TOOLS } from '~/api/queries/tool'
import type { Tool } from '~/api/types/tool'

export default function Tools() {
    const { data, error, loading } = useQuery<{ tools: Tool[] }>(GET_TOOLS, {
        variables: {
            first: 100,
            locales: ['tr_TR']
        }
    });

    console.log("data", data);

    return (
        <section className="container mx-auto text-center py-10 gap-10 grid lg:grid-cols-3">
            {data?.tools.map((tool) => (
                <article key={tool.id}>
                    {tool.icon?.url && <img src={tool.icon.url} alt={tool.title} />}
                    <h2 className="lg:text-2xl font-semibold">{tool.title}</h2>
                    <p className="text-sm mt-2">{tool.desc}</p>
                </article>
            ))}
        </section>
    )
}