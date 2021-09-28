import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div id="main-page">
            <h1>Creditus</h1>
            <div id="specialisation-list">
                <Link to="spec-ai">Artificial Intelligence</Link>
                <Link to="spec-db-web">Databases and Web</Link>
                <Link to="spec-gcs">General Computer Science</Link>
            </div>
            <a id="sgn" href="https://zavidnyi.com" >@ Ilia Zavidnyi</a>
        </div>
    );
}

export default MainPage;