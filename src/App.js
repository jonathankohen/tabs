import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tabs from './components/Tabs';

function App() {
    return (
        <div className="App">
            <main className="container my-5">
                <Tabs />
            </main>
        </div>
    );
}

export default App;
