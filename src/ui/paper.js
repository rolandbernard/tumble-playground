
import React from 'react';

import './paper.scss';

export function Paper(props) {
    const { className, ...others } = props;
    return (
        <span className={'ui-paper ' + (className || '')} {...others}>
        </span>
    );
}

export default Paper;

