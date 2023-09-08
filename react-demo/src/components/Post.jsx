import { Component } from "react";
import "../css/Post.css";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <p>
          <strong>
            <span>Name : </span>{" "}
          </strong>
          {this.props.userId}
        </p>
        <p>
          <span>Message : </span>
          {this.props.message}
        </p>
        <span>Comments :</span>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
