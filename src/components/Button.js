import React from 'react';
import './Button.scss';

const Button = ({ children, primary }) => {
    let className = 'button';

    if (primary) {
        className += '--primary';
    }

    if (typeof children === 'string') {
        children = children.toUpperCase();
    }

    return <button className={className}>{children}</button>;
};

export default Button;
