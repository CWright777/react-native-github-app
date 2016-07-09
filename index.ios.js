import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
} from 'react-native';

const Main = require('./App/Components/Main');
const Profile = require('./App/Components/Profile');
const NavigationBarRouteMapper = require('./App/Components/NavBarMapper');
const Dashboard = require('./App/Components/Dashboard');
const Repositories = require('./App/Components/Repositories');
const Web = require('./App/Components/Helpers/WebView')

class githubNoteTaker extends Component {
  renderScene(route,navigator){
    const routeId = route.id;
    if(routeId === 'Main'){
      return <Main navigator={navigator}/>
    } else if(routeId === 'Dashboard') {
      const userInfo =  route.passProps
      return <Dashboard userInfo={userInfo['userInfo']} navigator={navigator}/>
    } else if(routeId === 'Profile') {
      const userInfo =  route.passProps
      return <Profile userInfo={userInfo['userInfo']} navigator={navigator}/>
    } else if(routeId === 'Repositories') {
      const userInfo =  route.userInfo
      return <Repositories repos={route.repos} userInfo={userInfo} navigator={navigator}/>
    } else if(routeId === 'Web View') {
      const url =  route.url
      return <Web url={url} navigator={navigator}/>
    } else if(routeId === 'Notes') {
      return <Notes userInfo={route.userInfo} notes={route.notes} navigator={navigator}/>
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'Main',title: 'GitHub Note Taker'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          /> 
        } />
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
