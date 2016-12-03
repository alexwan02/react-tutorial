import React , {Component } from 'react';
import {View , Animated , Image , TouchableOpacity , StyleSheet , Text , LayoutAnimation} from 'react-native';

export default class AnimatedToturial  extends Component  {

  constructor(props){
    super(props);
    this.state = {w : 100 , h : 100};
    this.onPress = this.onPress.bind(this);
  }

  componentWillMount(){
    // Animate creation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }
  onPress(){
    //
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({w : this.state.w + 15 , h : this.state.h + 15});
  }
  render(){
    return (
      <View style={{flex : 1 , backgroundColor : 'dimgrey' , justifyContent : 'center' , alignItems : 'center'}}>
        <View style={[styles.box , {width : this.state.w , height : this.state.h}]}/>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me !</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  box: {
    backgroundColor : 'red' ,
  },
  button : {
    marginTop : 10 ,
    paddingVertical: 10 ,
    paddingHorizontal : 20,
    backgroundColor : 'black' ,
   },
  buttonText: {
    color: 'white' ,
    fontSize : 16 ,
    fontWeight : 'bold' ,
  }
})
