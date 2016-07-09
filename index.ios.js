import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

const Main = require('./App/Components/Main')
const NavigationBarRouteMapper = require('./App/Components/NavBarMapper')

class githubNoteTaker extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'Github Notetaker', index: 0, component: Main}}
        renderScene={(route,navigator) => {
          if (route.component) {
            return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route } );
          }
        }}
        navigationBar={ <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} /> } 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);
