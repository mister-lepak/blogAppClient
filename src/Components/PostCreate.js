import HeaderTitle from "./HeaderTitle";
import { getUser } from "../Utils/Common";
import FormComponent from "./PostForm";

const PostCreate = (props) => {
  const user = getUser();
  let adminMode = false;
  if (user) {
    adminMode = true;
  } else {
    adminMode = false;
  }

  return (
    <>
      <HeaderTitle adminMode={adminMode} {...props} username={user.username} />
      <FormComponent username={user.username} />
    </>
  );
};

export default PostCreate;
