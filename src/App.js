import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tabs from './components/Tabs';

const initialState = [
    {
        name: 'tab1',
        content: 'tab1 content',
        tabIndex: 0,
    },
    {
        name: 'tab2',
        content: 'tab2 content',
        tabIndex: 1,
    },
    {
        name: 'tab3',
        content: 'tab3 content',
        tabIndex: 2,
    },
];

function App() {
    const [tabs] = useState(initialState);

    return (
        <div className="App">
            <div className="container my-5">
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-12 text-center">
                        <Tabs tabs={tabs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
