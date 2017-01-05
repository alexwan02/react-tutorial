import React , {Component} from 'react';
import {View , ToolbarAndroid , StyleSheet} from 'react-native';



class Second extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        navIcon={require('image!ic_arrow_back_white_24dp')}
                        onIconClicked={this.props.navigator.pop}
                        titleColor={'#ffffff'}/>
        <Text>
          Second screen
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.createClass({
  container : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  } ,
  toolbar :{

  },
});
module.exports = Second;
