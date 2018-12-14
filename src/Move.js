import React from 'react';
import PropTypes from 'prop-types';

export const Move = ({ name, onClick, children }) => {
    if (typeof name !== 'string') {
        return null;
    }

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <div
            className="move"
            onClick={handleClick}
        >
            {name}
            {children}
        </div>
    );
};

Move.propTypes = {
    id: PropTypes.string,
};
