import React from 'react';

export default function Tab({ onClick, isActive, tabIndex, name }) {
    const handleTabClick = e => {
        e.preventDefault();
        onClick(tabIndex);
    };

    return (
        <>
            <button
                type="button"
                className={`btn btn-lg btn-outline-dark ${
                    isActive ? 'active' : ''
                }`}
                onClick={handleTabClick}
            >
                {name}
            </button>
        </>
    );
}
