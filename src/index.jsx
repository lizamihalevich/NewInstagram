import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Authorization from './components/authorization/authorization';
import Registration from './components/registration/registration';
import Page from './components/layout/page/page';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Authorization} />
                <Route path="/login" component={Registration} />
                <Route path="/page" component={Page} />
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
