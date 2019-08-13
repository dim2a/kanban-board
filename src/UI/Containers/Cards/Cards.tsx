import * as React from "react";
import Card from "../Card/Card";
import Store from "../../../api/temp";

const cardsRender = () => {
  return Store.Cards.map(c => {
    return <Card title={c.title} counter={c.counter} color={c.color} />;
  });
};

const Cards = () => {
  return <>{cardsRender()}</>;
};

export default Cards;
