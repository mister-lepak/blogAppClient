import axios from "axios";
import { useEffect } from "react";
import { getUser } from "../Utils/Common";
import HeaderTitle from "./HeaderTitle";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FormComponent from "./PostForm";

const PostUpdate = (props) => {
  const user = getUser();
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);

  let adminMode = false;

  if (user) {
    adminMode = true;
  } else {
    adminMode = false;
  }

  const updateGet = async () => {
    await axios
      .get(`https://afternoon-headland-20920.herokuapp.com/post/${id}/update`)
      .then((response) => {
        setPostDetail(response.data.posts[0]);
        console.log(postDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateGet();
  }, []);

  return (
    <>
      <HeaderTitle adminMode={adminMode} {...props} />
      <FormComponent
        title={postDetail.title}
        content={postDetail.content}
        updateMode="true"
        {...props}
      />
    </>
  );
};

export default PostUpdate;
