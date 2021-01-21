import HeaderTitle from "./HeaderTitle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DeletePost = (props) => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);

  const deleteGet = async () => {
    await axios
      .get(`https://afternoon-headland-20920.herokuapp.com/post/${id}/delete`)
      .then((response) => {
        setPostDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    deleteGet();
  }, []);

  const handleDelete = async () => {
    await axios
      .post(`https://afternoon-headland-20920.herokuapp.com/post/${id}/delete`)
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("fall to error");
        console.log(error);
      });
    props.history.push({ pathname: "/dashboard" });
  };

  return (
    <>
      <h3>
        Are you sure that you want to delete this post named {postDetail.title}?
      </h3>
      <a>
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
