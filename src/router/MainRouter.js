import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MainPage from '../components/MainPage';
import SpecAI from '../components/SpecAI';

const MainRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/spec-ai' component={SpecAI} />
        </Switch>
    </Router>
);

export default MainRouter;