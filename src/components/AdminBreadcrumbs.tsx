import { Anchor, Breadcrumbs } from '@mantine/core';
import { NavLink, useLocation } from 'react-router';

const pathToLabel: Record<string, string> = {
    admin: 'Admin',
    texts: 'Textes',
    gallery: 'Galerie',
    articles: 'Articles',
    pricing: 'Tarifs',
    team: 'Équipe',
};

const AdminBreadcrumbs = () => {
    const { pathname } = useLocation();

    const items = pathname
        .split('/')
        .filter(Boolean)
        .map((item, index) => (
            <Anchor
                component={NavLink}
                key={index}
                to={`/${pathname
                    .split('/')
                    .slice(1, index + 2)
                    .join('/')}`}
            >
                {pathToLabel[item] || item.charAt(0).toUpperCase() + item.slice(1)}
            </Anchor>
        ));

    return (
        <>
            <Breadcrumbs mb={'xs'} separatorMargin="xs">
                {items}
            </Breadcrumbs>
        </>
    );
};

export default AdminBreadcrumbs;
