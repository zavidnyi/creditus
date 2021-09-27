import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MainPage from '../components/MainPage';
import SpecAI from '../components/SpecAI';
import SpecDbWeb from '../components/SpecDbWeb';
import SpecGCS from '../components/SpecGCS';

const MainRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/spec-ai' component={SpecAI} />
            <Route exact path='/spec-db-web' component={SpecDbWeb} />
            <Route exact path='/spec-gcs' component={SpecGCS} />
        </Switch>
    </Router>
);

export default MainRouter;