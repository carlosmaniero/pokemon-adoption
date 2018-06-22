import * as React from 'react';
import { connect } from 'react-redux';
import cartIcon from './cart.svg';
import './Cart.css';

class CartImpl extends React.PureComponent {
    render() {
        return <div className="cart">
            <div className="cart-counter-wrapper">
                <img src={cartIcon} width="32px" alt="logo" />
                <div className="cart-counter">{this.props.items.length}</div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {items: state.cart}
}

export const Cart = connect(mapStateToProps)(CartImpl);