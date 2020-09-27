
import React, { createRef } from 'react';

import './button.scss';

function Button(props) {
    const { color, style, isLink, children, ...others } = props;
    const ripple_root = createRef();
    const onMouseDown = (event) => {
        let button = event.target;
        let rect = button.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let ripple = document.createElement('span');
        ripple.classList.add('ui-touch-ripple-ripple');
        let ripple_child = document.createElement('span');
        ripple_child.classList.add('ui-touch-ripple-child');
        ripple.appendChild(ripple_child);
        let size = Math.sqrt(button.clientWidth * button.clientWidth + button.clientHeight * button.clientHeight);
        ripple.style.width = (size * 2) + 'px';
        ripple.style.height = (size * 2) + 'px';
        ripple.style.left = (x - size) + 'px';
        ripple.style.top = (y - size) + 'px';
        console.log(button, button.clientLeft, button.clientTop, event.clientX, event.clientY, x, y, size);
        let root_ripple = button.getElementsByClassName('ui-touch-ripple-root')[0];
        root_ripple.appendChild(ripple);
    };
    const onMouseUpOrLeave = (event) => {
        let button = event.target;
        let root_ripple = button.getElementsByClassName('ui-touch-ripple-root')[0];
        root_ripple.childNodes.forEach((ripple) => {
            let ripple_child = ripple.childNodes[0];
            if (!ripple_child.classList.contains('ui-touch-ripple-child-exit')) {
                ripple_child.classList.add('ui-touch-ripple-child-exit');
                ripple_child.addEventListener('animationend', () => {
                    root_ripple.removeChild(ripple);
                });
            }
        });
    };
    let classes = 'ui-button';
    if(style && style.toLowerCase() === 'outlined') {
        classes += ' ui-button-outlined';
    } else if(style && style.toLowerCase() === 'text') {
        classes += ' ui-button-text';
    }
    if(color && color.toLowerCase() === 'primary') {
        classes += ' ui-button-primary';
    } else if(color && color.toLowerCase() === 'secondary') {
        classes += ' ui-button-secondary';
    }
    return (isLink ?
        (<a
            className={classes}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            { ...others }
        >
            <span ref={ripple_root} className="ui-touch-ripple-root"></span>
            <span className="ui-button-content" children={children}></span>
        </a>) :
        (<button
            className={classes}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            { ...others }
        >
            <span ref={ripple_root} className="ui-touch-ripple-root"></span>
            <span className="ui-button-content" children={children}></span>
        </button>)
    );   
}

export default Button;
