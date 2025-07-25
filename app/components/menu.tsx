import { useQuery } from '@apollo/client';
import { GET_MENU } from '~/api/queries/menu';
import type { Menu } from '~/api/types/menu';

export default function Menu() {
    const { data, error, loading } = useQuery<{ menus: Menu[] }>(GET_MENU, {
        variables: {
            first: 10,
            locales: ["tr_TR"]
        }
    });

    return (
        <nav>
            <ul className="flex flex-wrap lg:space-x-3">
                {data?.menus.map((menu) => (
                    <li className="relative group" key={menu.id}>
                        <a href={menu.externalUrl || menu.page.meta.slug || '#'} className="text-white bg-blue-500 py-2 px-4 rounded block">
                            {menu.label}
                        </a>
                        {menu.children && menu.children.length > 0 && (
                            <ul className="absolute top-full left-0 w-full bg-white border-t-4 border-blue-500 shadow-lg rounded hidden group-hover:block">
                                {menu.children.map((child) => (
                                    <li key={child.id}>
                                        <a rel="noopener noreferrer" target="_blank" href={child.externalUrl || child.page.meta.slug || '#'} className="text-blue-500 block px-4 py-2">
                                            {child.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}