// PACKAGES
import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    it('renders', () => {
        const container = mount(<App />);
        expect(container.exists()).toBe(true);
    });
});
