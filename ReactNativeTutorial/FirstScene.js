import React , {Component} from 'react';
import {View , StyleSheet , ToolbarAndroid , TouchableHighlight} from 'react-native';


class First extends Component{
  navSecond(){
    this.props.navigator.push({
      id : 'second'
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        titleColor={'#ffffff'}
                        />
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text> Navigator to second screen</Text>
        </TouchableHighlight>

      </View>
    );
  }
}


var styles = StyleSheet.createClass({
  container  : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  } ,
  toolbar  : {

  } ,
});

module.export = First;
