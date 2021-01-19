import App from "./App";
import HeaderTitle from "./HeaderTitle";

const FrontPage = (props) => {
  return (
    <>
      <HeaderTitle />
      <App {...props} />
    </>
  );
};

export default FrontPage;
