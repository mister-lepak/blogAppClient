import { useEffect, useState } from "react";
import { format } from "date-fns";
import HeaderTitle from "./HeaderTitle";

function App(props) {
  const user = props.user;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const ExtraButtonDisplay = (props) => {
    if (user) {
      return (
        <>
          <div className="right floated column">
            <a href={"post/" + props.postId + "/delete"}>
              <i className="delete icon" />
            </a>
            <a href={"post/" + props.postId + "/update"}>
              <i className="edit icon" />
            </a>
          </div>
        </>
      );
    }
    return null;
  };

  const fetchIndexData = async () => {
    try {
      const indexResponse = await fetch("http://localhost:5000/", {
        mode: "cors",
      });
      const index = await indexResponse.json();
      setPosts(index.posts);
      setComments(index.comments);
      // console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIndexData();
  }, []);

  const Comments = (props) => {
    const { comments, postId } = props;
    return comments.map((comment, index) => {
      // console.log(comment);
      if (comment.post._id === postId) {
        const dateComment = new Date(comment.timeStamp);
        const formattedDateComment = format(
          dateComment,
          "yyyy-MMMM-dd kk:mm:ss"
        );
        return (
          <div className="comment">
            <div className="content">
              <a className="author"> {comment.user} </a>
              <div className="metadata">
                <span className="date">{formattedDateComment}</span>
              </div>
              <div className="text">
                <p>{comment.content}</p>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const Posts = (props) => {
    const { posts, comments } = props;
    return posts.map((post, index) => {
      // console.log(post.id);
      const datePost = new Date(post.timeStamp);
      const formattedDatePost = format(datePost, "yyyy-MMMM-dd kk:mm:ss");

      return (
        <div className="ui raised very padded text container segment">
          <div className="ui grid">
            <div className="left floated fourteen wide column">
              <h2 className="ui header">
                <a href={"/post/" + post._id}>{post.title}</a>
              </h2>
            </div>
            <ExtraButtonDisplay postId={post.id} />
          </div>

          <p>
            by {post.username} on {formattedDatePost}
          </p>
          <p>{post.content}</p>

          <div className="ui comments ">
            <h3 className="ui dividing header ">Comments</h3>
            <Comments comments={comments} postId={post._id} />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Posts posts={posts} comments={comments} />
    </>
  );
}

export default App;
