import React from "react";
import "./App.css";

import Card from "./UI/Containers/Card/Card";
import Store from "./api/temp";

const App: React.FC = () => {
  const cardsRender = () => {
    return Store.Cards.map(c => {
      return (
        <div>
          <Card title={c.title} counter={c.counter} color={c.color} />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Hello!!!</h1>
      <div className="wrapper">
        {cardsRender()}
        {console.log("hollo")}
      </div>
    </div>
  );
};

export default App;
