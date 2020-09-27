
import React from 'react';
import { useState, useEffect } from 'react';

import { initCompiler } from './tumble-compiler';
import Button from './ui/button';

let globalSetOutput = () => {};
let globalOutput = "";


function App() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(true);
    const [running, setRunning] = useState(false);
    globalSetOutput = setOutput;
    globalOutput = output;
    useEffect(() => {
        // initCompiler((text) => {
        //     globalSetOutput(globalOutput + text);
        // }).then(() => {
        //     setLoading(false);
        // })
    }, []);
    return (
        <div>
            <Button color="primary">Run program</Button>
            <Button style="outlined" color="secondary">Clear output</Button>
        </div>
    );
}

export default App;
