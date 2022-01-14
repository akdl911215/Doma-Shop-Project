import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import TestCode2 from "./TestCode2";
import { useNavigate } from "react-router";

const TestCode = () => {
  const [visible, setVisible] = useState(false);
  const [selectBar, setSelectBar] = useState(false);

  const TestCode2Click = () => {
    setSelectBar(!selectBar);
    console.log("selectBar : ", selectBar);
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>사이드바 체크</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" onClick={TestCode2Click} />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Input style={{ height: "15rem" }} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>

      {selectBar ? <TestCode2></TestCode2> : ""}
    </Grid>
  );
};
export default TestCode;
