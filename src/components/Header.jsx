import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeadTitle from './HeadTitle';

import '../styles/components/Header.styl';

const Header = props => (
  <div className="Header">
    <HeadTitle title="Platzi TypeStore V1" />
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
      {props.cart.length > 0 && (
        <div className="Header-alert">{props.cart.length}</div>
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
