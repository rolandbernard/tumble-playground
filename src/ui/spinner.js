
import React from 'react';

import './spinner.scss';

export function Spinner(props) {
    const { className, ...others } = props;
    return (
        <span className={'ui-spinner ' + (className || '')} {...others}>
            {[...Array(10).keys()].map((i) => (
                <span key={i}></span>
            ))}
        </span>
    );
}

export default Spinner;
