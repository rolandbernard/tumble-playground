
import React from 'react';

import './header.scss';

export function Header(props) {
    const { className, ...others } = props;
    return (
        <div className={'ui-header ' + (className || '')} {...others}>
        </div>
    );
}

export function Spacer(props) {
    return (<span className="ui-header-spacer" {...props}></span>)
}

export default Header;