import * as React from 'react';
import * as assert from 'assert';
import { shallow } from 'enzyme';
import App from '../app/App';

describe('fragment', () => {
    it('should render with the correct class', () => {
        const wrapper = shallow(<App name="FooBar"/>);
        assert.equal(wrapper.find('.z-yourTeam-yourFragmentName').length, 1);
    });
});