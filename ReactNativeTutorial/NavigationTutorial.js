import React ,{Component , PropTypes} from 'react';
import {View , Navigator , StyleSheet , Text} from 'react-native';

export default class NavigationTutorial extends Component{
  // constructor(props){
  //   super(props);
  // }

  static get defaultProps(){
    return { title : 'My Scene'};
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={{color:'black' , fontSize : 20}}> Hi! My name is {this.props.title}.</Text>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent: 'center' ,
    alignItems : 'center',
    backgroundColor : 'white',
  }
});

NavigationTutorial.propTypes = {
  title : PropTypes.string.isRequired ,
  onForward : PropTypes.func.isRequired ,
  onBack: PropTypes.func.isRequired,
}
