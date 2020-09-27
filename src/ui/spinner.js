
import React from 'react';

import './spinner.scss';

export function Spinner(props) {
    return (
        <span className="ui-spinner">
            {[...Array(10).keys()].map((i) => (
                <span key={i}></span>
            ))}
        </span>
    );
}

export default Spinner;
