import React , {Compnent} from 'react';
import {
  StyleSheet ,
  Text ,
  View ,

} from 'react-native';

import {Actions} from 'react-native-router-flux';

const GrayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.welcome}
        onPress={() => Actions.scarlet()}>
        Gray Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : '#dbd9db' ,
  } ,
  welcome : {
    fontSize : 20 ,
    textAlign : 'auto' ,
    margin : 10 ,
    color : '#ffffff'
  } ,
});

export default GrayScreen;
