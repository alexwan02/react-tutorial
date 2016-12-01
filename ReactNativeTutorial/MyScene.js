import React , {Component , PropTypes} from 'react';
import {View , Text , TouchableHighlight} from 'react-native';

export default class MyScene extends Component {
  render (){
    return (
      <View>
        <Text style={{alignItems: 'center' , textAlign : 'center' , fontSize : 20 , padding : 10}}>
          Current Scene : {this.props.title}
        </Text>

        <TouchableHighlight onPress={this.props.onForward} underlayColor="white">
          <Text style={{fontSize : 15 , padding : 5}}>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack} underlayColor="white" >
          <Text style={{fontSize : 15 , padding : 5}}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
MyScene.propTypes = {
  title : PropTypes.string.isRequired,
  onForward : PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
