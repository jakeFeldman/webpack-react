// PACKAGES
import React from 'react';
// STYLES
import './Button.scss';

/**
 *
 * @type {React.Component} Button
 * @author Jake Feldman
 */
export default function Button ({ children }) {
    return (
        <button className="button">{children}</button>
    );
}
