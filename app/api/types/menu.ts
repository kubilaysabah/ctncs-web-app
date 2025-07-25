export type Menu = {
    id: string;
    label: string | null;
    externalUrl: string | null;
    page: {
        meta: {
            slug: string | null;
        }
    }
    children: Menu[] | null;
}