import * as React from "react";
import styled from "styled-components";

export interface CardComponentProps {
  title: string;
  counter: number;
  color: string;
}

const CardColor = styled.div`
  width: 250px;
  background-color: ${props => props.color};
  min-height: 200px;
  display: flex;
  padding: 10px;
}
`;
const Title = styled.h3`
  margin: 0 auto;
`;

const Card: React.FC<CardComponentProps> = props => {
  return (
    <CardColor color={props.color}>
      <Title>{`${props.title}: ${props.counter}`}</Title>
    </CardColor>
  );
};

export default Card;
