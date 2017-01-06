import React , {Compnent} from 'react';
import {
  StyleSheet ,
  Text ,
  View ,
} from 'react-native';
import {Router , Scene} from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="scarlet"
          component={ScarletScreen}
          title="Scarlet"
          initial
        />
        <Scene key="gray"
          component={GrayScreen}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}


const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : '#F5FCFF' ,
  } ,
  welcome : {
    fontSize : 20 ,
    textAlign : 'center' ,
    margin : 10 ,
  } ,
});

export default App;
