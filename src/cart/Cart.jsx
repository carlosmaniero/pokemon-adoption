import * as React from 'react';
import { connect } from 'react-redux';

class CartImpl extends React.PureComponent {
    render() {
        return <div className="cart">
            <div className="cart-counter">{this.props.items.length}</div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {items: state.cart}
}

export const Cart = connect(mapStateToProps)(CartImpl);