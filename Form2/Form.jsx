// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

import { useState } from "react";

export const Login = () => {
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
    </div>
  );
};
