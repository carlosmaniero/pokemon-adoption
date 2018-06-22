import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { Cart } from '../Cart';
import moxios from 'moxios'

describe('Cart', () => {
    let store;
    let wrapper;
    
    const cartCounter = () => parseInt(wrapper.find('.cart-counter').text());

    beforeEach(() => {
        store = configureStore();
        wrapper = mount(
          <Provider store={store}>
            <Cart />
          </Provider>);
    });

    it('starts with zero items on the cart', () => {
        expect(cartCounter()).toEqual(0);
    });
})