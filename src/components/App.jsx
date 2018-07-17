import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import axios from "axios";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class App exports Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <Header>This is your React boilerplate code</Header>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));