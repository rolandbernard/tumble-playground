
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>Hello world!</h1>
        </div>
    );
}

ReactDOM.render(<div className="root"/>, document.getElementsByTagName('body'));
ReactDOM.render(<App />, document.getElementById('root'));
