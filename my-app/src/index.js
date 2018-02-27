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
    const mensOptions = [
      { key: 1, text: 'Tank Tops' },
      { key: 2, text: 'Shirts' },
      { key: 3, text: 'Hats' },
      { key: 4, text: 'Accessories' },
    ];

    const womensOptions = [
      { key: 1, text: 'Tank TOps' },
      { key: 2, text: 'Shirts' },
      { key: 3, text: 'Long Sleeve Shirts'  },
      { key: 4, text: 'Sweatshirts' },
      { key: 5, text: 'Hats' },
      { key: 6, text: 'Accessories' },
      { key: 7, text: 'Stickers' },
    ];

    const kidsOptions = [
      { key: 1, text: 'Shirts' },
      { key: 2, text: 'Onesies' },
      { key: 3, text: 'Sweatshirts' },
      { key: 4, text: 'Accessories' },
    ];

    const brandOptions = [
      { key: 1, text: 'Aloha Surf Project' },
      { key: 2, text: 'Da Mokes' },
      { key: 3, text: 'Farmers Market Hawaii'  },
      { key: 4, text: 'Hawaii Domestic Hawaii' },
      { key: 5, text: 'Herschel Supply Co' },
      { key: 6, text: 'Island Snow Hawaii' },
      { key: 7, text: 'Kailua Boys' },
    ];

    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown text="MEN" options={mensOptions} simple item />
              <Dropdown text="WOMEN" options={womensOptions} simple item />
              <Dropdown text="KIDS" options={kidsOptions} simple item />
              <Dropdown text="BRANDS" options={brandOptions} simple item />
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
