import { useState, useEffect } from "react";
import axios from "axios";
import { useFormInput } from "../Utils/Common";

const CommentInput = (props) => {
  const { postId, loggedInMode } = props;
  const user = useFormInput("");
  const content = useFormInput("");
  const submissionURL = "/";

  if (loggedInMode) {
    submissionURL = "/dashboard";
  }

  const handleSubmit = async () => {
    await axios
      .post("/comment/create", {
        content: content.value,
        user: user.value,
        post: postId,
      })
      .then((response) => {
        props.history.push({ submissionURL });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" {...user} />
        </div>
        <div className="field">
          <label>Comment</label>
          <input
            type="text"
            name="comment"
            placeholder="Input Comment Here"
            {...content}
          />
        </div>
        <a className="ui button" type="submit" onClick={handleSubmit}>
          Submit
        </a>
      </form>
    </>
  );
};

export default CommentInput;
