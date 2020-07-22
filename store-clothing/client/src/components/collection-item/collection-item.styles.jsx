import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.components";

export const CollectionItemContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  opacity: 0.7;
  position: absolute;
  top: 17rem;
  display: none;
  width: 80%;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.3125rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
`;

export const NameContainer = styled.h6`
  margin-bottom: 0.9375rem;
`;

export const PriceContainer = styled.h6`
  text-align: right;
`;
