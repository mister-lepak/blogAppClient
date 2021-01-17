import { getUser, removeUserSession } from "../Utils/Common";

const HeaderTitle = (props) => {
  const user = getUser();
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/log-in");
  };

  const goToCreatePost = () => {
    props.history.push({
      pathname: "/post/create",
      state: { adminMode: props.adminMode },
    });
  };

  const backToDashboard = () => {
    props.history.push({
      pathname: "/dashboard",
      state: { adminMode: props.adminMode },
    });
  };

  if (props.adminMode) {
    return (
      <div className="ui dividing clearing segment">
        <h1 className="ui left floated header" onClick={backToDashboard}>
          Blog App
        </h1>

        <div className="ui right floated header">
          <button className="ui button" onClick={goToCreatePost}>
            <h3>Create New Post</h3>
          </button>
          <button className="ui button" onClick={handleLogout}>
            <h3>Sign Out</h3>
          </button>
        </div>
        <div className="ui right floated header">Welcome, {user.username}!</div>
      </div>
    );
  } else {
    return (
      <div className="ui dividing clearing segment">
        <a className="ui left floated header" href="/">
          Blog App
        </a>
        <div className="ui right floated header">
          <a className="ui button" href="/log-in">
            Log In
          </a>
        </div>
      </div>
    );
  }
};

export default HeaderTitle;
