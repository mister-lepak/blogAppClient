import { useEffect, useState } from "react";
import { format } from "date-fns";
import HeaderTitle from "./HeaderTitle";
import CommentForm from "./CommentForm";
import CommentInput from "./CommentForm";
import { Link } from "react-router-dom";

function App(props) {
  const user = props.user;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  let loggedInMode = false;

  const ExtraButtonDisplay = (props) => {
    if (user) {
      loggedInMode = true;
      return (
        <>
          <div className="right floated column">
            <Link
              to={{
                pathname: "post/" + props.postId + "/delete",
                props: props,
              }}
            >
              <i className="delete icon" />
            </Link>

            <Link
              to={{
                pathname: "post/" + props.postId + "/update",
                props: props,
              }}
            >
              <i className="edit icon" />
            </Link>
          </div>
        </>
      );
    }
    return null;
  };

  const fetchIndexData = async () => {
    try {
      const indexResponse = await fetch(
        "https://afternoon-headland-20920.herokuapp.com/",
        {
          mode: "cors",
        }
      );
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
  }, [props]);

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
            <CommentForm
              postId={post._id}
              loggedInMode={loggedInMode}
              {...props}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Posts posts={posts} comments={comments} {...props} />
    </>
  );
}

export default App;
