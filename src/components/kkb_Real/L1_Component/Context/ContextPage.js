import React, {Component} from "react";
import {ThemeProvider, UserProvider} from "./Context";
import Consumer from "./Consumer";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        name: "小明"
      }
    };
  }

  changeColor = () => {
    const {themeColor} = this.state.theme;
    this.setState({
      theme: {themeColor: themeColor === "red" ? "green" : "red"}
    });
  };
  render() {
    const {theme, user} = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        <ThemeProvider value={theme}>
          <UserProvider value={user}>
            <Consumer />
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}
