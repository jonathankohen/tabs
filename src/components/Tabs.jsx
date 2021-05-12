import React, { useState } from 'react';

import Tab from './Tab';

const tabList = [
    {
        name: 'Tab 1',
        content:
            'This is the content stored in Tab 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis ad eius provident! Optio eius delectus est? Non eligendi ad, ab provident sapiente reprehenderit reiciendis, neque odit a, earum facilis?',
        tabIndex: 0,
    },

    {
        name: 'Tab 2',
        content:
            'This is the content stored in Tab 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis ad eius provident! Optio eius delectus est? Non eligendi ad, ab provident sapiente reprehenderit reiciendis, neque odit a, earum facilis?',
        tabIndex: 1,
    },
    {
        name: 'Tab 3',
        content:
            'This is the content stored in Tab 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis ad eius provident! Optio eius delectus est? Non eligendi ad, ab provident sapiente reprehenderit reiciendis, neque odit a, earum facilis?',
        tabIndex: 2,
    },
];

const initialTabIndex = 0;

export default function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

    const handleTabClick = tabIndex => {
        setActiveTabIndex(
            tabIndex === activeTabIndex ? initialTabIndex : tabIndex
        );
    };

    return (
        <>
            <section className="d-flex justify-content-center">
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                >
                    {tabList.map((tab, i) => {
                        return (
                            <Tab
                                key={i}
                                tabIndex={i}
                                name={tab.name}
                                content={tab.content}
                                isActive={activeTabIndex === i}
                                onClick={handleTabClick}
                            />
                        );
                    })}
                </div>
            </section>

            <section className="d-flex justify-content-center">
                {tabList.map((tab, i) => {
                    return activeTabIndex === i ? (
                        <div
                            className="card text-white bg-primary mb-3 mt-5"
                            style={{ maxWidth: '18rem' }}
                        >
                            <div className="card-header">{tab.name}</div>
                            <div className="card-body">
                                <h5 className="card-title">Ex perferendis</h5>
                                <p className="card-text">{tab.content}</p>
                            </div>
                        </div>
                    ) : (
                        ''
                    );
                })}
            </section>
        </>
    );
}
