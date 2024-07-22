import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

class CssTrans extends Component {
  state = {
    showList: true,
    highlightedHobby: false
  };
  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };
  listSwitch = () => {
    this.setState(state => ({
      highlightedHobby: !state.highlightedHobby
    }));
  };
  render() {
    return (
      <div className="container">
        <button className="display" onClick={this.switch}>
          Obinna
        </button>
        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        >
          <div className="list-body">
            <ul className="list">
              <li
                
              >
                Writing JavaScript
              </li>
              <li className="list-item"> Running</li>
              <li className="list-item"> Technical Writing</li>
              <li className="list-item"> Writing Clean code</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default CssTrans;