
import React from 'react';

import './header.scss';

export function Header(props) {
    return (
        <div className="ui-header" {...props}>
        </div>
    );
}

export function Spacer(props) {
    return (<span className="ui-header-spacer" {...props}></span>)
}

export default Header;