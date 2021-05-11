import React from 'react';

export default function Tab({ name }) {
    return (
        <div className="col-lg-4 col-md-12">
            <button
                class="btn btn-lg btn-dark mx-5 w-25"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${name}`}
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
            >
                {name}
            </button>
        </div>
    );
}
