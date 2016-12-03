'use strict';

var React = require('react');

var ReactNative = require('react-native');
var {
  AppRegistry ,
  StyleSheet ,
  Text ,
  View ,
  Image ,
  TouchableWithoutFeedback,
} = ReactNative;

var rebound = require('rebound');
// var precomputeStyle = require('precomputeStyle');

var ScrollSpring = React.createClass({
  componentWillMount(){
    // Initialize the spring that will drive animations
    this.springSystem = new rebound.SpringSystem();
    this._scrollSpring = this.springSystem.createSpring();
    var springConfig = this._scrollSpring.getSpringConfig();
    springConfig.tension = 240;
    springConfig.friction = 10;

    this._scrollSpring.addListener({
      onSpringUpdate: () => {
        if(!this._photo) { return }
        var v = this._scrollSpring.getCurrentValue();
        // var newSpring = precomputeStyle({transform : [{scaleX : v } , {scaleY : v}]});
        this._photo.setNativeProps({style : {transform : [{scaleX : v } , {scaleY : v}]}});
      }
    });

    this._scrollSpring.setCurrentValue(1);
  } ,

  _onPressIn(){
    this._scrollSpring.setEndValue(0.5);
  } ,

  _onPressOut(){
    this._scrollSpring.setEndValue(1);
  } ,

  render: function(){
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
          <Image ref={component => this._photo = component}
                  source ={{uri : 'http://www.bz55.com/uploads/allimg/160408/140-16040Q05507.jpg'}}
                  style={{width : 250 , height : 200}}/>

        </TouchableWithoutFeedback>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  }
});

module.exports = ScrollSpring;
