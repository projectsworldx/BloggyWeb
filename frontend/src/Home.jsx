import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';


class Root extends React.Component {

    constructor() {
        super();
    }

    render() {
       /*  const continents = ['Africa','America','Asia','Australia','Europe'];
       const helloContinents = Array.from(continents, c => `Hello ${c}!`);
       const message = helloContinents.join(' '); */
        return (
                    <h1>Hello</h1> 
                );
    }
}

const root = <Root />;
ReactDOM.render(root, document.getElementById('root'));