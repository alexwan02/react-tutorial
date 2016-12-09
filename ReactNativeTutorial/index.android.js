/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Navigator,
  Text,
  Image,
  TextInput,
  View ,
  NativeModules ,
  DeviceEventEmitter ,
} from 'react-native';

import MyScene from './MyScene';
import Playground from './Playground';
import AnimatedToturial from './AnimatedToturial';
import ReboundScrollSpring from './ReboundScrollSpring';
import NavigatorCustomize from './NavigatorCustomize';
import ClearTextInput from './ClearTextInput';
import NavigationTutorial from './NavigationTutorial';
import ToastAndroid from './ToastAndroid';
import ImagePicker from './ImagePicker';



class Bananas extends Component{
  render(){
    let pic = {
      uri : this.props.pic
    };
    return (
      <Image source={pic} style={{width : 193 , height : 110}}/>
    );
  }
}


class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText:true};

    // toggle the state every second
    setInterval(() => {
      this.setState({showText : !this.state.showText});
    } , 1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style} >{display}</Text>
    );
  }
}

class FlexDimensionsBasics extends Component{
  render(){
    return (
      // Try removing the 'flex 1' on the parent View
      // The parent will not have dimensions , so the children can't expand
      // What if you add 'height : 300' instead of 'flex : 1' ?
      <View style={{height : 100}}>
        <View style={{flex : 1 , backgroundColor: 'powderblue'}} />
        <View style={{flex : 2 , backgroundColor: 'skyblue'}} />
        <View style={{flex : 3 , backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class JustifyContentBacis extends Component {
  render(){
    return (
      // Try setting `alignItems` to 'flex-start'.
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{height: 300 , flexDirection : 'row' , justifyContent : 'center' , alignItems: 'center'}}>
        <View style={{width : 50 , height : 50 , backgroundColor: 'powderblue'}} />
        <View style={{width : 50 , height : 50 , backgroundColor: 'skyblue'}} />
        <View style={{width : 50 , height : 50 , backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text : ''};
  }

  render(){
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height : 40 }}
          placeholder="Type here to translator"
          onChangeText={(text) => this.setState({text})}/>
        <Text style={{padding : 10 , fontSize : 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

      </View>
    );
  }
}

class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1 , r2 ) => r1 != r2});
    this.state = {
      dataSource : ds.cloneWithRows([
        'alexwan' , 'clianga' , 'wanhc' , 'lucky'
      ])
    }
  }

  render(){
      return (
        <ListView style={{height : 300}} dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}/>
      );
  }
}
export default class ReactNativeTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{alignItems : 'center'}}>
              <Bananas pic='https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'/>
            </View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>33234
              To get started, edit index.android.js
            </Text>
            <Text style={styles.instructions}>
              Double tap R on your keyboard to reload,{'\n'}
              Shake or press menu button for dev menu
            </Text>
            <Blink style={[styles.instructions , styles.bigblue]} text='I love to blink and blink is so great.'/>
            <View style={{height : 50 , flexDirection : 'row'}} >
              <View style={{flex : 1 , height : 50 , backgroundColor: 'powderblue'}} />
              <View style={{flex : 1 , height : 50 , backgroundColor: 'skyblue'}} />
              <View style={{flex : 1 , height : 50 , backgroundColor: 'steelblue'}} />
            </View>
            <JustifyContentBacis />
            <PizzaTranslator />

        </ScrollView>
        <ListViewBasics />

      </View>
    );
  }
}

class SimpleNavigationApp extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{ title : 'My Initial Scene' , index : 0}}
          renderScene={(route , navigator ) =>
            <MyScene
              title={route.title}
              // Function to call when a new scene should be displayed
              onForward ={() => {
                const nextIndex = route.index + 1 ;
                navigator.push({
                  title : 'Scene ' + nextIndex ,
                  index : nextIndex ,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if(route.index > 0){
                  navigator.pop();
                }
              }}
            />
          }
          style={{height : 40}}
        />

        <Image source={require('./img/bridge_@3x.png')}
          style={{height : 200 ,
              width : undefined ,
              borderTopLeftRadius : 10 ,
              borderTopRightRadius : 10 ,
              borderBottomLeftRadius : 10 ,
              borderBottomRightRadius : 10}} />
        <Playground/>
      </View>
    )
  }

}


// Animated Tutorial
class AnimatedApp extends Component{
  render(){
    return (
      <AnimatedToturial />
    );
  }
}

// Navigator App
class NavigatorApp extends Component{
  constructor(props){
    super(props);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
    this._pickImage = this._pickImage.bind(this);
  }

  _onForward(route , navigator){
    const nextIndex = route.index + 1;
    ToastAndroid.show('_onForward', ToastAndroid.SHORT);
    navigator.push({
      title: 'Scene ' + nextIndex,
      index: nextIndex,
    });
  }

  _onBack(route , navigator){
    if (route.index > 0) {
      navigator.pop();
      ToastAndroid.show('_onBack', ToastAndroid.SHORT);
    }
  }

  componentWillMount(){
    DeviceEventEmitter.addListener('keyboardWillShow' , function(e : Event){
        // Handle the event
    });
  }

  componentDidMount(){
    // Pick Image
    this._pickImage().done();
  }

  async _pickImage(){
    try {
      let uri = await ImagePicker.pickImage();
      console.log('image uri = ' + uri);
    } catch (e) {
      console.error(e);
    }
  }


  render(){
    return (
      <Navigator
          initialRoute={{title : 'My Initial Scene' , index : 0}}
          renderScene={(route , navigator)=>
            <MyScene title={route.title}
                      // Function to call when a new scene should be displayed
                      onForward={() => this._onForward(route , navigator)}
                      // Function to call to go back to the previous scene
                      onBack={() => this._onBack(route , navigator)}/>
          }
        />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding : 10 ,
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
  image: {
    width : 193 ,
    height : 110 ,

  } ,
  bigblue:{
    color : 'blue' ,
    fontWeight : 'bold' ,
    fontSize : 20,
  }
});

AppRegistry.registerComponent('SimpleNavigationApp', () => NavigatorApp);
