import React from 'react';
import WbnPlayer from './WbnPlayer';
import ErrorPage from '../ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route exact path="/" component={WbnPlayer} />
                <Route exact path="/:activeVideo" component={WbnPlayer} />
                <Route path="*" component={ErrorPage} />
            </Switch>
            <GlobalStyle />
        </>
    </BrowserRouter>
);

export default App;
