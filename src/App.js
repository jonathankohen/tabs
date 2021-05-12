import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tabs from './components/Tabs';
import Tab from './components/Tab';

const initialState = [
    {
        name: 'tab1',
        content: 'tab1 content',
        tabIndex: 0,
        isActive: false,
    },
    {
        name: 'tab2',
        content: 'tab2 content',
        tabIndex: 1,
        isActive: false,
    },
    {
        name: 'tab3',
        content: 'tab3 content',
        tabIndex: 2,
        isActive: false,
    },
];

function App() {
    const [tabs, setTabs] = useState(initialState);

    return (
        <div className="App">
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-12 text-center">
                        <Tabs tabs={tabs} />
                        {/* <Tabs>
                            <Tab
                                iconClassName={'icon-class-0'}
                                linkClassName={'link-class-0'}
                            >
                                <p>content 0</p>
                            </Tab>
                            <Tab
                                iconClassName={'icon-class-1'}
                                linkClassName={'link-class-1'}
                            >
                                <p>content 1</p>
                            </Tab>
                        </Tabs> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

// import { useRef } from 'react';

// function LogButtonClicks() {
//     const countRef = useRef(0);

//     const handle = () => {
//         countRef.current++;
//         console.log(`Clicked ${countRef.current} times`);
//     };

//     console.log('I rendered!');

//     return <button onClick={handle}>Click me</button>;
// }
