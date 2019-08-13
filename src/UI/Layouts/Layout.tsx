import * as React from "react";
import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
`;

const Layout: React.FC<LayoutProps> = props => {
  return <Container>{props.children}</Container>;
};

export default Layout;
