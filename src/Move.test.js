import React from 'react';
import { mount } from 'enzyme';
import { Move } from './Move';

describe('<Move>', () => {
    it('is a function', () => {
        const actual = typeof Move;
        const expected = 'function';
        expect(actual).toEqual(expected);
    });

    it('does not render when name is not string', () => {
        const wrapper = mount(<Move />);
        const actual = wrapper.find('.move').length;
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('should execute onClick', () => {
        const fn = jest.fn();
        const wrapper = mount(<Move name="jan" onClick={fn} />);

        wrapper.find('.move').simulate('click');

        const actual = fn.mock.calls.length;
        const expected = 1;
        expect(actual).toEqual(expected);
    });

    it('does not throw when onClick is not of type function', () => {
        const wrapper = mount(<Move name="jan" onClick={9} />);

        const actual = () => wrapper.find('.move').simulate('click');
        expect(actual).not.toThrow();
    });

    it('does not throw when onClick is not of type function', () => {
        const wrapper = mount(
            <Move name="jan" onClick={9}></Move>
        );

        const actual = () => wrapper.find('.move').simulate('click');
        expect(actual).not.toThrow();
    });
});
