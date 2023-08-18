import { Component } from "react";


export class Button extends Component {
  render() {
    const { text, action } = this.props;
    return (
      <div className="btn-area">
        <button onClick={action} type="button" className="btn btn-primary btn-lg btn-load">{text}</button>
      </div>
    );
  }
}