import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchIndexData = async () => {
    try {
      const indexResponse = await fetch("http://localhost:5000/", {
        mode: "cors",
      });
      const index = await indexResponse.json();
      setPosts(index.posts);
      setComments(index.comments);
      console.log(index);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIndexData();
  }, []);

  const HeaderTitle = () => {
    return (
      <div className="ui dividing clearing segment">
        <h1 className="ui left floated header">Blog App</h1>
        <div className="ui right floated header">
          <button className="ui button">
            <h3>Log In</h3>
          </button>
        </div>
        <div className="ui right floated header">
          <button className="ui button">
            <h3>Sign Up</h3>
          </button>
        </div>
      </div>
    );
  };

  const Comments = (props) => {
    const { comments, postId } = props;
    return comments.map((comment, index) => {
      if (comment.post._id === postId) {
        const dateComment = new Date(comment.timeStamp);
        const formattedDateComment = format(
          dateComment,
          "yyyy-MMMM-dd kk:mm:ss"
        );
        return (
          <div className="ui container segment">
            <p>{comment.content}</p>
            <p>
              by {comment.user.username} on {formattedDateComment}
            </p>
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
          <h2 className="ui header">{post.title}</h2>
          <p>
            by {post.user.username} on {formattedDatePost}
          </p>
          <p>{post.content}</p>
          <Comments comments={comments} postId={post._id} />
        </div>
      );
    });
  };

  return (
    <>
      <HeaderTitle />
      <Posts posts={posts} comments={comments} />
    </>
  );
}

export default App;
