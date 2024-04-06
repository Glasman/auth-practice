import { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();

  const logIn = async(event) => {
    event.preventDefault();
    try {
      await fetch('/logIn')
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <>
      <h1>Auth practice!</h1>
      <form onSubmit={logIn}>
        <label>
          Username:
          <input
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default App;
