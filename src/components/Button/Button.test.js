// PACKAGES
import React from 'react';
import { mount } from 'enzyme';
// COMPONENT
import Button from './Button';

describe('Button', () => {
    it('mounts', () => {
        const container = mount(<Button />);
        expect(container.exists()).toBe(true);
    });
});
