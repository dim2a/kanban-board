import React from "react";
import "./App.css";
import styled from "styled-components";
import Cards from "./UI/Containers/Cards/Cards";
import Layout from "./UI/Layouts/Layout";
import { Switch, Route, Redirect } from "react-router";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
  padding: 10px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Cards} />
          <Route path="/about" component={() => <h1>About</h1>} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
