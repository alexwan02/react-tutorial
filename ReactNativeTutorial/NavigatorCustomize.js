import React , {Component} from 'react';

import {StyleSheet , Text , View , Navigator , TouchableOpacity} from 'react-native';


var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({} , BaseConfig.gestures.pop , {
  // Make it snap nack really quickyly after cancelling pop
  snapVelocity : 8 ,
  // Make it so we can dray anywhere on the SCREEN_WIDTH
  edgeHitWidth : SCREEN_WIDTH,
});


var CustomSceneConfig = Object.assign({} , BaseConfig , {
  // A very tighly wound spring will make this transition fast
  springTension  : 100 ,
  springFriction : 1 ,
  // Use our custom gesture define above
  gestures : {
    pop : CustomLeftToRightGesture ,
  }
});

class PageOne extends Component {

  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.navigator.push({id : 2});
  }

  render(){
    return (
      <View style={[styles.container  , {backgroundColor : 'green'}]}>
        <Text style={styles.welcome}>Greetings</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={{paddingVertical : 10 , paddingHorizontal : 20 , backgroundColor : 'black'}}>
              <Text style={styles.welcome}>Go to page two</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class PageTwo extends Component{
    constructor(props){
      super(props);
      this.handlePress = this.handlePress.bind(this);
    }

    handlePress(){
      this.props.navigator.pop();
    }

    render(){
      return (
        <View style={[styles.container  , {backgroundColor : 'green'}]}>
          <Text style={styles.welcome}>This is page two!</Text>
          <TouchableOpacity onPress={this.handlePress}>
            <View style={{paddingVertical : 10 , paddingHorizontal : 20 , backgroundColor : 'black'}}>
                <Text style={styles.welcome}>Go back</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}


export default class NavigatorCustomize extends Component{
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
  }

  renderScene(route , navigator){
    if(route.id === 1){
      return <PageOne navigator={navigator}/>
    } else {
      return <PageTwo navigator={navigator}/>
    }
  }

  configureScene(route){
    return CustomSceneConfig
  }
  render(){
    return (
      <Navigator
          initialRoute={{id : 1}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          />
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : '#F5FCFF' ,
  } ,
  welcome : {
    fontSize : 20 ,
    textAlign : 'center' ,
    margin : 10 ,
    color : 'white' ,
  } ,
});
