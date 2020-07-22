import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

import Alert from "react-bootstrap/Alert";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [show, setShow] = useState(false);

  const handelAddToCart = () => {
    addItem(item);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <CollectionItemContainer className="col-lg-3 col-md-4 col-xs-12">
      <BackgroundImage className="" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className="button-respo" onClick={handelAddToCart} inverted>
        Add to cart
      </AddButton>
      <Alert
        variant="success"
        className="alert-custom"
        show={show}
        onClose={() => setShow(false)}
        dismissible
      >
        Added to cart
      </Alert>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
