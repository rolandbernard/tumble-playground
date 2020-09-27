
import React, { createRef } from 'react';

import './code-editor.scss';

export function CodeEditor(props) {
    const { value, onChange, ...others } = props;
    const input = createRef();
    let line_count = value ? value.split('\n').length : 1;
    const myOnChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };
    const onKeyPress = (event) => {
        if (event.key === "Tab") {
            let sel_start_pos = event.currentTarget.selectionStart;
            let sel_end_pos = event.currentTarget.selectionEnd;
            let new_value = value.substring(0, sel_start_pos) + "\t" + value.substring(sel_end_pos);
            event.preventDefault();
            input.current.value = new_value;
            input.current.selectionStart = sel_start_pos + 1;
            input.current.selectionEnd = sel_start_pos + 1;
            onChange(new_value);
        }
    }
    return (
        <div className="ui-code-editor" {...others}>
            <div className="ui-code-editor-container">
                <div className="ui-code-editor-lines">
                    {[...Array(line_count).keys()].map((i) => (
                        <span key={i} className="ui-code-editor-linenumber">{i + 1}</span>
                    ))}
                </div>
                <textarea
                    ref={input}
                    value={value}
                    onChange={myOnChange}
                    onKeyDown={onKeyPress}
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
