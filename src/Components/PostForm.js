import axios from "axios";
import { useState, useEffect } from "react";
import { useFormInput, setUserSession, getUser } from "../Utils/Common";
import { useParams } from "react-router-dom";

const FormComponent = (props) => {
  const user = getUser();
  const { id } = useParams();

  // const title = useFormInput(props.title);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  // const content = useFormInput(props.content);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
    // console.log(title);
  }, [props.title, props.content]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const processPOST = async () => {
    let url = "";
    if (props.updateMode) {
      url = `/post/${id}/update`;
    } else {
      url = "/post/create";
    }
    await axios
      .post(url, {
        title: title,
        content: content,
        user: user.username,
      })
      .then((response) => {
        // setLoading(false);
        // console.log(response.data.token);
        // console.log(response.data);
        // setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
        // if (error.response.status === 401)
        //   setError(error.response.data.message);
        // else setError("Something went wrong. Please try again later");
      });
    // props.history.push("/dashboard");
  };

  return (
    <form className="ui raised very padded text container segmented form">
      <div className="field">
        <label>Post Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        ></input>
      </div>
      <div className="field">
        <label>Post Contents</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>

      <a className="ui button" type="submit" onClick={processPOST}>
        Submit
      </a>
    </form>
  );
};

export default FormComponent;
