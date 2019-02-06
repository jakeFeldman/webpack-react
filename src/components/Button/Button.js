// PACKAGES
import React, { useState } from 'react';
// STYLES
import './Button.scss';

/**
 *
 * @type {React.Component} Button
 * @author Jake Feldman
 */
export default function Button ({ children }) {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <p>I've been clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className="button">{children}</button>
            <button onClick={() => setCount(count - 1)} className="button">Decrement</button>
        </React.Fragment>
    );
}
