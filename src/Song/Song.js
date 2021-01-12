import { React, Component } from "react";

export default class Song extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <emphasize>{this.props.author}</emphasize>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
