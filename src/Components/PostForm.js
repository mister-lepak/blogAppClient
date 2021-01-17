import axios from "axios";
import { useState } from "react";
import { useFormInput, setUserSession, getUser } from "../Utils/Common";
import { useParams } from "react-router-dom";

const FormComponent = (props) => {
  const user = getUser();
  const { id } = useParams();

  const title = useFormInput(props.title);
  const content = useFormInput(props.content);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const processPOST = () => {
    let url = "";
    if (props.updateMode) {
      url = `http://localhost:5000/post/${id}/update`;
    } else {
      url = "http://localhost:5000/post/create";
    }
    axios
      .post(url, {
        title: title.value,
        content: content.value,
        user: user.username,
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data.token);
        // console.log(response.data);
        setUserSession(response.data.token, response.data.user);
        // props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later");
      });
    // props.history.push("/dashboard");
  };

  return (
    <form className="ui raised very padded text container segmented form">
      <div className="field">
        <label>Post Title</label>
        <input type="text" name="title" {...title}></input>
      </div>
      <div className="field">
        <label>Post Contents</label>
        <textarea type="text" name="content" {...content}></textarea>
      </div>

      <a
        href="/dashboard"
        className="ui button"
        type="submit"
        onClick={processPOST}
      >
        Submit
      </a>
    </form>
  );
};

export default FormComponent;
