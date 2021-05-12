import React from 'react';

export default function Tab({ onClick, isActive, tabIndex, name }) {
    const handleTabClick = e => {
        e.preventDefault();
        onClick(tabIndex);
    };

    return (
        <button
            type="button"
            className={`btn btn-primary ${isActive ? 'active' : ''}`}
            onClick={handleTabClick}
        >
            {name}
        </button>
    );
}
