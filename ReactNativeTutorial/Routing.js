import React , {Component , BackAndroid} from 'react';
import {Navigator , Image , View} from 'react-native';

var _navigator; // We fill this up upon on first navigation

BackAndroid.addListener('hardwareBackPress' , function(){
    if(_navigator.getCurrentRoutes().length == 1){
      return false;
    }
    _navigator.pop;
    return true;
});

class Navigation extends React.Component{
  render(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id : 'first'}}
        renderScene={this.navigatorRenderState}/>
    );
  }

  navigatorRenderState(route , navigator){
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'second':
        return (<Second navigator={navigator} title="second"/>);
    }
  }
}


var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'center' ,
    alignItems : 'center',
  }
})
