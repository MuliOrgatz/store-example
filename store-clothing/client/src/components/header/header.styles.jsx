import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5625rem;
  padding: 0;
`;

export const LogoContainer = styled(Link)`
  width: 4.688rem;
  padding: 1.5625rem;
  padding-left: 0;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0.625rem 0.9375rem;
  cursor: pointer;
`;
