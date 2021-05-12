import React from 'react';

export default function Tab({ onClick, isActive, tabIndex, name, content }) {
    const handleTabClick = e => {
        e.preventDefault();
        onClick(tabIndex);
    };

    return (
        <>
            <button
                type="button"
                className={`btn btn-primary ${
                    isActive === tabIndex ? 'active' : ''
                }`}
                onClick={handleTabClick}
            >
                {name}
            </button>

            {isActive === tabIndex ? <h1>{content}</h1> : ''}
        </>
    );
}
