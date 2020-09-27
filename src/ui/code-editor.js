
import React from 'react';

import './code-editor.scss';

export function CodeEditor(props) {
    const { value, onChange, ...others } = props;
    let line_count = value ? value.split('\n').length : 1;
    const myOnChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    return (
        <div className="ui-code-editor" {...others}>
            <div className="ui-code-editor-container">
                <div className="ui-code-editor-lines">
                    {[...Array(line_count).keys()].map((i) => (
                        <span key={i} className="ui-code-editor-linenumber">{i + 1}</span>
                    ))}
                </div>
                <textarea
                    value={value}
                    onChange={myOnChange}
                    className="ui-code-editor-input"
                    placeholder="Type some code..."
                    autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                    scrolling="no"
                ></textarea>
            </div>
        </div>
    );
}

export default CodeEditor;
