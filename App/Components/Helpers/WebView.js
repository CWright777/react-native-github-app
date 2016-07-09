import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
})

class Web extends Component{
  render(){
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    )
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

module.exports = Web
