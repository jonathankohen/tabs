import React from 'react';

import Tab from './Tab';
import Display from './Display';

export default function Tabs({ tabs }) {
    return (
        <>
            <p>
                <div className="row">
                    {tabs.map((tab, i) => {
                        return <Tab key={i} {...tab} />;
                    })}
                </div>
            </p>
            <div class="row">
                {tabs.map((t, i) => {
                    return <Display key={i} {...t} />;
                })}
            </div>
        </>
    );
}
