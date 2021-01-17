import HeaderTitle from "./HeaderTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DeletePost = (props) => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${id}/delete`)
      .then((response) => {
        setPostDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (props) => {
    axios
      .post(`http://localhost:5000/post/${id}/delete`)
      .then((response) => {
        // props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h3>
        Are you sure that you want to delete this post named {postDetail.title}?
      </h3>
      <a href="/dashboard">
        <button className="ui positive button" onClick={handleDelete}>
          Yes
        </button>
      </a>
      <a href="/dashboard">
        <button className="ui negative button">No</button>
      </a>
    </>
  );
};

export default DeletePost;
