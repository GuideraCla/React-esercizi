// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

// Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
// When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state, that will print the state value.
import { useState } from "react";

export const Login = ({onLogin}) => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [checkbox, setCheckbox] = useState("");

  const handlingFormUsername = (event) => {
    const value = event.target.value; // setUsername(event.target.value);

    setUsername(value);
  };

  const handlingFormPassword = (event) => {
    const value = event.target.value;

    setPassword(value);
  };

  const handlingFormCheckbox = (event) => {
    const checked = event.target.checked;

    setCheckbox(checked);
  };

  const isLoginDisabled = username === "" || password === "";

  const handleLogin = () => {
      if (!isLoginDisabled) {
        onLogin({username, password, checkbox})
      }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handlingFormUsername}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlingFormPassword}
      />
      <input
        type="checkbox"
        name="remember"
        checked={checkbox}
        onChange={handlingFormCheckbox}
      />
      <button onClick={handleLogin} disabled={isLoginDisabled}>
        Login
      </button>
    </div>
  );
};