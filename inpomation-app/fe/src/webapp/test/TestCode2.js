import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import TestCode from "./TestCode";

const TestCode2 = () => {
  const [state, setState] = useState(false);
  const [topMenuBar, setTopMenuBar] = useState(true);
  const TestCodeClick = () => {
    setState(!state);
    setTopMenuBar(!topMenuBar);
  };
  console.log("state : ", state);

  const [topMenuName, setTopMenuName] = useState("");
  const handleCallback = (topMenuName) => {
    setTopMenuName(topMenuName);
  };

  const topMenuEventChange = () => {
    setTopMenuName("");
    setState(true);
  };

  return (
    <>
      {topMenuBar ? (
        <Menu>
          <Menu.Item
            name="editorials"
            active={state === "editorials"}
            content="여길누르면 메뉴가 나오지요"
            onClick={TestCodeClick}
          />
        </Menu>
      ) : (
        <Menu>
          <Menu.Item style={{ width: "10rem" }}>
            <Button secondary onClick={TestCodeClick}>
              X
            </Button>
            <div>
              <p style={{ fontSize: "2rem" }}>{topMenuName}</p>
              {topMenuName ? (
                <Button inverted color="red" onClick={topMenuEventChange}>
                  누르면 탑메뉴 사라짐
                </Button>
              ) : (
                ""
              )}
            </div>
          </Menu.Item>
        </Menu>
      )}
      {state ? (
        <TestCode
          event="click"
          parentCallback={handleCallback}
          topMenuName={topMenuName}
        ></TestCode>
      ) : (
        ""
      )}
    </>
  );
};
export default TestCode2;
