import React from 'react';

export default function Tab({ tab, propFunc }) {
    const selectHandler = () => {
        tab.select = 'true';
        propFunc(tab);
    };

    return (
        <div className="col-lg-4 col-md-12">
            <button
                className="btn btn-lg btn-dark mx-5 w-25"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${tab.name}`}
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                onClick={selectHandler}
            >
                {tab.name}
            </button>
        </div>
    );
}
