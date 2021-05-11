import React from 'react';

export default function Display({ name, content }) {
    return (
        <div className="col">
            <div className="collapse multi-collapse" id={name}>
                <div className="card card-body text-bold text-black">
                    {content}
                </div>
            </div>
        </div>
    );
}
