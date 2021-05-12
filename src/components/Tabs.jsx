import React, { useState } from 'react';

import Tab from './Tab';

const initialTabIndex = 0;

export default function Tabs({ tabs }) {
    const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

    const handleTabClick = tabIndex => {
        setActiveTabIndex(
            tabIndex === activeTabIndex ? initialTabIndex : tabIndex
        );
    };

    return (
        <>
            {tabs.map((tab, i) => {
                return (
                    <Tab
                        key={i}
                        tabIndex={i}
                        name={tab.name}
                        content={tab.content}
                        isActive={activeTabIndex}
                        onClick={handleTabClick}
                    />
                );
            })}
        </>
    );
}
