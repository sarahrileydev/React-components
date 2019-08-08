import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:00pm"
        comment="Nice blog post!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Pam"
        timeAgo="Today at 5:00pm"
        comment="Nice blog post!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Cam"
        timeAgo="Today at 6:00pm"
        comment="Nice blog post!"
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
