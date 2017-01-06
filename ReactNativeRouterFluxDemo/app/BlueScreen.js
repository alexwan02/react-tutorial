import React , {Compnent} from 'react';
import {
  StyleSheet ,
  Text ,
  View ,

} from 'react-native';

import {Actions} from 'react-native-router-flux';

const BlueScreen = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.welcome}
        onPress={() => Actions.maize()}>
        Blue Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : '#0D47A1' ,
  } ,
  welcome : {
    fontSize : 20 ,
    textAlign : 'auto' ,
    margin : 10 ,
    color : '#ffffff'
  } ,
});

export default BlueScreen;
