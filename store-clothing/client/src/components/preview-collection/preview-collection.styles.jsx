import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
`;

export const TitleContainer = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.5625rem;
  margin-left: 15px;
  cursor: pointer;
  margin-right: auto;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: -webkit-box;
  justify-content: space-between;
`;
