import React , {Component} from 'react';
import {View , TextInput , TouchableOpacity , Text , StyleSheet , } from  'react-native';

export default class ClearTextInput extends Component{
  constructor(props){
    super(props);
    this.clearText = this.clearText.bind(this);
  }

  clearText(){
    this._textInput.setNativeProps({text : ''});
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput ref = {component => this._textInput = component }
              style={{width : 200 , height : 50 , borderWidth : 1 , borderColor : '#888888'}}/>
          <TouchableOpacity onPress={this.clearText}>
            <Text>Click here to clear the text</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    paddingBottom : 100 ,
  } ,
});
