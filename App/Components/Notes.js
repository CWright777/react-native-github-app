import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

const Badge = require('./Badge');
const Separator = require('./Helpers/Separator');
const api = require('../Utils/api')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});
class Notes extends Component{
  constructor(props){
    super(props)
    this.ds = new ListView.DataSource({rowHasChange: (row1,row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: '',
      error: ''
    }
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    })
  }
  handleSubmit(){
    this.setState({
      note: e.nativeEvent.text
    })

    api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        api.getNotes(this.props.userInfo.login)
          .then((data) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          })
      }).catch((err) => {
        console.log('Request failed',err);
        this.setState(error)
      })
  }
  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  footer(){
    <View style={styles.footContainer}>
      <TextInput
        style={style.searchInput}
        value={this.state.note}
        onChange={this.handleChange.bind(this)}
        placeholder="New Note" />
      <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit.bind(this)}
        underlayColor="#88D4FS">
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableHighlight>
    </View>
  }
  render(){
    <View style={styles.container}
      <ListView
        dataSource={this.state.dataSource}
        render={this.renderRow}
        renderHeader={() => <Badge userInfo={this.props.userInfo}/>}/>
      {this.footer()}
    </View>
  }
}

Notes.propTypes = {
  userInfo: React.PropTypes.object.isRequired
  notes: React.PropTypes.object.isRequired
}

module.exports = Notes;
