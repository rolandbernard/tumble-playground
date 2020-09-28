
import React from 'react';
import { useState, useEffect } from 'react';

import { initCompiler, runProgram } from './tumble-compiler';
import Button from './ui/button';
import CodeEditor from './ui/code-editor';
import Paper from './ui/paper';
import { Header, Spacer } from './ui/header';
import Spinner from './ui/spinner';
import Logo from './logo.svg';
import './app.scss';

let globalOutput = "";

const initial_code = '\nextern printf(fmt: *i8, ..);\n\nmain() {\n    printf("Hello world!\\n");\n}\n';

function App() {
    const [input, setInput] = useState(initial_code);
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(true);
    const [running, setRunning] = useState(false);
    globalOutput = output;
    useEffect(() => {
        initCompiler((text) => {
            globalOutput += (globalOutput ? '\n' : '') + text;
        }).then(() => {
            setLoading(false);
        })
    }, []);
    const onRunProgram = () => {
        setRunning(true);
        runProgram(input);
        setOutput(globalOutput);
        setRunning(false);
    }
    const onClearOutput = () => {
        setOutput('');
    }
    return (
        <div className="app-root">
            <Header style={{ flex: '0 0 auto' }}>
                <Spacer></Spacer>
                <img src={Logo} alt="Logo" className="header-logo"></img>
                <span className="header-title">Tumbleweed</span>
                <Spacer></Spacer>
            </Header>
            <div className="app-content">
                <div style={{ flex: '1 1 100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="app-content-header">
                        Input:
                        <Spacer></Spacer>
                        <Button
                            disabled={running || loading}
                            color="primary"
                            style={{ margin: 0, flex: '0 0 auto' }}
                            onClick={onRunProgram}
                        >Run program</Button>
                    </div>
                    <CodeEditor
                        style={{ flex: '1 1 100%' }}
                        value={input}
                        onChange={(value) => setInput(value)}
                    ></CodeEditor>
                </div>
                <div style={{ flex: '1 1 75%', display: 'flex', flexDirection: 'column' }}>
                    {loading ?
                        (<div className="app-loading"><Spinner></Spinner></div>) :
                        ([(<div className="app-content-header">
                            Output:
                            <Spacer></Spacer>
                            <Button
                                variant="outlined"
                                color="secondary"
                                style={{ margin: 0, flex: '0 0 auto' }}
                                onClick={onClearOutput}
                            >Clear output</Button>
                        </div>),
                        (<Paper className="app-output">
                            <pre>{output.replace(/\x1B\[.*?m/g, "")}</pre>
                        </Paper>)])}
                </div>
            </div>
        </div>
    );
}

export default App;
