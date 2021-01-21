import HeaderTitle from "./HeaderTitle";
import postData from "../postData";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";

const LogIn = (props) => {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const usernameInput = useRef();
  const passwordInput = useRef();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    await axios
      .post("https://afternoon-headland-20920.herokuapp.com/log-in", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        // console.log(response.data.token);
        // console.log(response.data);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later");
      });
  };

  const FormComponent = () => {
    const postSubmission = (e) => {
      e.preventDefault();
    };

    return (
      <form
        className="ui raised very padded text container segmented form"
        onSubmit={(e) => {
          postSubmission(e);
        }}
      >
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            {...username}
            autoComplete="new-password"
          ></input>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...password}
            autoComplete="new-password"
          ></input>
        </div>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <button
          className="ui button"
          type="submit"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        >
          Submit
        </button>
      </form>
    );
  };

  return (
    <>
      <HeaderTitle />
      {/* <FormComponent key="form1" /> */}
      {FormComponent()}
    </>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LogIn;
