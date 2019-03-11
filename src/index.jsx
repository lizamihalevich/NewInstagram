import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import input from 'src/components/input';

function App() {
    return (
        <div>
            Hello World!
            <input />
        </div>
    );
}

ReactDOM.render(
    <App />,
    window.document.getElementById('app'),
);
