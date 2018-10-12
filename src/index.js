import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function renderAwesomeExample() {
    ReactDOM.render(
        <App />,
        document.getElementById('homepage-app-demo')
    );
}

window.renderAwesomeExample = renderAwesomeExample;