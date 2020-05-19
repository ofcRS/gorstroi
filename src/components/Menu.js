import React from 'react';

import './Menu.scss';

const MENU_ITEMS = [
    { title: 'Услуги', href: 'services' },
    { title: 'Проекты', href: 'projects' },
    { title: 'О компании', href: 'about' },
    { title: 'Новости', href: 'news' },
    { title: 'Контакты', href: 'contacts' },
];

const Menu = ({ primary }) => {
    let className = 'navigation';
    if (primary) className += '--primary';
    return (
        <nav className={className}>
            {MENU_ITEMS.map(({ title, href }) => (
                <a key={title} href={`#${href}`}>
                    {title.toUpperCase()}
                </a>
            ))}
        </nav>
    );
};

export default Menu;
