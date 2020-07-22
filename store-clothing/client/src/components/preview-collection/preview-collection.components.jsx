import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.components";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./preview-collection.styles";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Popover id="popover-contained">
            <Popover.Title as="h3">{`Click here`}</Popover.Title>
            <Popover.Content>To see all {title} items</Popover.Content>
          </Popover>
        }
      >
        <TitleContainer
          onClick={() => history.push(`${match.path}/${routeName}`)}
        >
          {title.toUpperCase()}
        </TitleContainer>
      </OverlayTrigger>

      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            if (
              item.id === 23 ||
              item.id === 10 ||
              item.id === 1 ||
              item.id === 18 ||
              item.id === 30
            ) {
              return (
                <div key={item.id} className="with-arrow">
                  <CollectionItem key={item.id} item={item} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="arrow"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </div>
              );
            } else {
              return <CollectionItem key={item.id} item={item} />;
            }
          })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(PreviewCollection);
