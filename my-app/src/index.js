import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305" centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown item text="MEN">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMEN">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>KIDS</Menu.Item>
              <Dropdown item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item>DA MOKES</Dropdown.Item>
                  <Dropdown.Item>HILIFE</Dropdown.Item>
                  <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                  <Dropdown.Item>VOLCOM HAWAII</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>SEARCH</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {

    return (
        <Image src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?6262025621919840031" fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Container>
            <Grid columns={3} divided>
              <Grid.Column>
                <h2>Navigation</h2>
                <hr/>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h2>Main Menu</h2>
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h2>Connect</h2>
                <hr/>
                <p>Sign Up for the Latest Updates</p>
                <Input
                    action={ { color: 'black', content: 'Join'} }
                    placeholder="Enter Email Address"
                />
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <IslandSnow/>,
    document.getElementById('root')
);
