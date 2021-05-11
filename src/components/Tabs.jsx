import React from 'react';

import Tab from './Tab';
import Display from './Display';

export default function Tabs({ tabs, setTabs }) {
    const propFunc = newTab => {
        // setTabs([...tabs, newTab]);
        setTabs(
            tabs.map((tb, i) => {
                if (tb.name === newTab.name) {
                    tabs.splice(i, 1);
                }
            })
        );
    };
    return (
        <>
            <p>
                <div className="row">
                    {tabs.map((tab, i) => {
                        return <Tab key={i} tab={tab} propFunc={propFunc} />;
                    })}
                </div>
            </p>
            <div className="row">
                {tabs.map((t, i) => {
                    return <Display key={i} {...t} />;
                })}
            </div>
        </>
    );
}
