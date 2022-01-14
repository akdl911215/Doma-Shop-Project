import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
  Button,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const TestCode = ({ event, parentCallback, topMenuName }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (event === "click") {
      setVisible(!visible);
    }
  }, []);

  const topNameChange = () => {
    alert("1");
    parentCallback((topMenuName = "Home"));
  };

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox checked={visible} style={{ visibility: "hidden" }} />
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
              <Icon name="home" onClick={topNameChange} />
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
    </Grid>
  );
};
export default TestCode;
