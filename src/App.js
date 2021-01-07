import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchIndexData = async () => {
    try {
      const indexResponse = await fetch("http://localhost:5000/", {
        mode: "cors",
      });
      const index = await indexResponse.json();
      console.log(index);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchIndexData();
  });

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
}

export default App;
