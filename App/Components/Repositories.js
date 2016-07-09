import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const Badge = require('./Badge');
const Separator = require('./Helpers/Separator');

const styles = StyleSheet.create({
    container: {
      marginTop: 65,
      flex: 1,
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

class Repositories extends Component{
  openPage(url){
    console.log('url',url)
  }
  render(){
    const repos = this.props.repos;
    const list = repos.map((item,index) => {
      const desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View />
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}>Stars: {repos[index].stargazers_count}</Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    })
    return(
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
};

module.exports = Repositories
