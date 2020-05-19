import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ children, id }) => {
    if (typeof children === 'string') children = children.toUpperCase();
    return (
        <h2 className="block-title" id={id}>
            {children}
        </h2>
    );
};

export default SectionTitle;
