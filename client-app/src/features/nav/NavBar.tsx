import React, { useContext } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import ActivityStore from "../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";


const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to='/'>
          <img src="/assets/logo.jpg" alt="logo" style={{ marginRight: 10 }} />
          Kaysbook
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to='/activities' />
        <Menu.Item>
          <Button
            as={NavLink} to ='/createActivity'
            positive
            content="Create Event"
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
