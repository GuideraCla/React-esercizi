// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
// Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

import { useState } from "react";

export const InteractiveWelcome = () => {
  const [data, setData] = useState("");

  const handlingUsername = (event) => {
    const value = event.target;

    setData(value);
  };

  return (
    <form action="">
      <Welcome prop={data.username} />
      <input type="text" value={data} onChange={handlingUsername} />
    </form>
  );
};

const Welcome = ({ prop }) => {
  return <h2>Welcome {prop}!</h2>;
};
