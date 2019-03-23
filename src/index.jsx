import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authorization from './components/authorization/authorization';
import Registration from './components/registration/registration';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Authorization} />
                <Route path="/login" component={Registration} />
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    window.document.getElementById('app'),
);
