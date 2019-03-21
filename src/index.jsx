import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authorization from './components/authorization/authorization';

function App() {
    return (
        <div>
            <Authorization />
        </div>
    );
}

ReactDOM.render(
    <App />,
    window.document.getElementById('app'),
);
