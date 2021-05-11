import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tabs from './components/Tabs';

const initialState = [
    {
        name: 'tab1',
        content: 'tab1 content',
        index: 0,
        selected: false,
    },
    {
        name: 'tab2',
        content: 'tab2 content',
        index: 1,
        selected: false,
    },
    {
        name: 'tab3',
        content: 'tab3 content',
        index: 2,
        selected: false,
    },
];

function App() {
    const [tabs, setTabs] = useState(initialState);

    return (
        <div className="App">
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-12 text-center">
                        <Tabs tabs={tabs} setTabs={setTabs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
