import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import { getUser } from "../Utils/Common";

const PostDetail = (props) => {
  const user = getUser();
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);
  let adminMode = false;

  if (user) {
    adminMode = true;
  } else adminMode = false;

  const fetchPostData = async () => {
    try {
      const response = await fetch("http://localhost:5000/post/" + id, {
        mode: "cors",
      });

      const postResponse = await response.json();
      setPostDetail(postResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const PostContent = () => {
    return (
      <div className="ui raised very padded text container segment">
        <h1 className="ui header">{postDetail[0] && postDetail[0].title}</h1>
        <p>{postDetail[0] && postDetail[0].content}</p>
      </div>
    );
  };

  return (
    <>
      <HeaderTitle adminMode={adminMode} {...props} />
      <PostContent />
    </>
  );
};

export default PostDetail;
