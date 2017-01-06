import React , {Compnent} from 'react';
import {
  StyleSheet ,
  Text ,
  View ,
} from 'react-native';
import {Router , Scene} from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import BlackScreen from './BlackScreen';

import ModalScreen from './ModalScreen';


const TabIcon = ({selected , title}) => {
  return (
    <Text style={{color : selected ? 'red' : 'black'}}>
      {title}
    </Text>
  );
};
const App = () => {
  return (
    <Router>

      <Scene key="root">
        {/* Tab container */}
        <Scene key="tabbar"
          tabs={true}
          tabBarStyle={{backgroundColor : 'AtomAtom#ffffff'}}>
          {/* Tab and it's scenes */}
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
              initial />
            <Scene key="gray"
              component={GrayScreen}
              title="Gray"/>
          </Scene></Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene key="blue"
              component={BlueScreen}
              title="Blue"
              initial />
            <Scene key="maize"
              component={MaizeScreen}
              title="Maize"/>
          </Scene>

          <Scene key="yu" title="YU" icon={TabIcon}>
            <Scene key="gold"
              component={GoldScreen}
              title="Gold"
              initial />
            <Scene key="black"
              component={BlackScreen}
              title="Black" />
          </Scene>
        </Scene>
        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
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
