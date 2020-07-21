import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({
  toggleCartHidden,
  itemCount,
  small,
  setCollapse,
  collapse,
}) => {
  const history = useHistory();
  const handelOnClick = () => {
    if (small) {
      history.push("/checkout");
      setCollapse(!collapse);
    } else {
      toggleCartHidden();
    }
  };
  return (
    <div className="cart-icon" onClick={handelOnClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
