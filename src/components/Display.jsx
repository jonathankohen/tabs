import React from 'react';

export default function Display({ name, content }) {
    return (
        <div class="col">
            <div class="collapse multi-collapse" id={name}>
                <div class="card card-body text-bold text-black">{content}</div>
            </div>
        </div>
    );
}
