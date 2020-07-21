import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/diamond.svg";

import {
  OptionLink,
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
} from "./header.styles";

import "./header.styles.scss";

import { Collapse } from "react-bootstrap";

import CartIcon from "../cart-icon/cart-icon.components";
import CartDropDown from "../cart-dropdown/cart-dropdown.components";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [collapse, setCollapse] = useState(false);
  const [small, setSmall] = useState(window.innerWidth < 800);

  const handelCollapsButton = () => {
    setCollapse(!collapse);
    setSmall(true);
  };

  return (
    <HeaderContainer className="navbar navbar-expand-lg navbar-light">
      <LogoContainer to="/" className="navbar-brand">
        <Logo className="logo d-inline-block align-top" />
      </LogoContainer>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handelCollapsButton}
        aria-controls="navBar"
        aria-expanded={collapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <OptionsContainer className={"navbar-collapse justify-test"}>
        <Collapse in={small ? collapse : false}>
          <div
            className="navbar-nav"
            id="navBar"
            style={small ? { display: "" } : { display: "flex" }}
          >
            <OptionLink
              to="/shop"
              className="nav-item nav-link"
              onClick={() => setCollapse(!collapse)}
            >
              {" "}
              SHOP{" "}
            </OptionLink>
            <OptionLink
              to="/contact"
              className="nav-item nav-link"
              onClick={() => setCollapse(!collapse)}
            >
              CONTACT
            </OptionLink>
            {currentUser ? (
              <OptionLink
                className="nav-item nav-link"
                as="div"
                to=""
                onClick={() => {
                  signOutStart();
                  setCollapse(!collapse);
                }}
              >
                SIGN OUT
              </OptionLink>
            ) : (
              <div style={small ? { display: "" } : { display: "flex" }}>
                <OptionLink
                  className="nav-item nav-link"
                  to="/signin"
                  onClick={() => setCollapse(!collapse)}
                >
                  SIGN IN
                </OptionLink>
                <OptionLink
                  className="nav-item nav-link"
                  to="/signup"
                  onClick={() => setCollapse(!collapse)}
                >
                  SIGN UP
                </OptionLink>
              </div>
            )}
            <CartIcon
              small={small}
              className="nav-item nav-link"
              setCollapse={setCollapse}
              collapse={collapse}
            />
          </div>
        </Collapse>
      </OptionsContainer>

      {hidden || small ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
