import * as React from "react";
import styled from "styled-components";

export interface CardComponentProps {
  title: string;
  counter: number;
  color: string;
}

const CardColor = styled.div`
  width: 30%;
  background-color: ${props => props.color};
  height: 200px;
}
`;

const Card: React.FC<CardComponentProps> = props => {
  console.log("props", props.color);
  return (
    <CardColor color={props.color}>
      <h3>{props.title}</h3>
      <p>{props.counter}</p>
    </CardColor>
  );
};

export default Card;
