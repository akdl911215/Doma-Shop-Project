import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
const TestCode2 = () => {
  const [state, setState] = useState("");
  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  return (
    <>
      <Menu>
        <Menu.Item
          name="editorials"
          active={state === "editorials"}
          content="Editorials"
          onClick={handleItemClick}
        />

        <Menu.Item
          name="reviews"
          active={state === "reviews"}
          content="Reviews"
          onClick={handleItemClick}
        />

        <Menu.Item
          name="upcomingEvents"
          active={state === "upcomingEvents"}
          content="Upcoming Events"
          onClick={handleItemClick}
        />
      </Menu>
    </>
  );
};
export default TestCode2;
