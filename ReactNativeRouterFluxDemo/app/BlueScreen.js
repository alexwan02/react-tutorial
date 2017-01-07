import React , {Component} from 'react';
import {
  StyleSheet ,
  Text ,
  View ,
  ListView ,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import immutable from 'immutable';

const countries = immutable.fromJS([
  {name: 'China', population: '1,393,783,836'},
  {name: 'India', population: '1,267,401,849'},
  {name: 'U.S.A.', population: '322,583,006'},
  {name: 'Indonesia', population: '252,812,245'},
  {name: 'Brazil', population: '202,033,670'}
]);

const Title = ({children}) => (
  <Text style={styles.title} onPress={() => Actions.maize()}>
    {children}
  </Text>
)

const Row = ({name , population}) => (
  <View style={styles.row}>
    <Title>{name}</Title>
    <Title>{population}</Title>
  </View>
)

const renderRow = (rowData) => (
  <Row name={rowData.get('name')}
      population={rowData.get('population')}/>
)
class BlueScreen extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({
        rowHasChanged : (r1 , r2 ) => !immutable.is(r1 , r2) ,
    });

    this.state = {
      dataSource : ds.cloneWithRows(countries.toArray()) ,
    }
  }

  render(){
    return (
      // <View style={styles.container}>
        <ListView style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={renderRow}/>
        // <Text style = {styles.welcome}
        //     onPress={() => Actions.maize()}>
        //     Blue Screen
        // </Text>
      // </View>
    )

  }
  // return (
  //   <View style={styles.container}>
  //     <Text style = {styles.welcome}
  //       onPress={() => Actions.maize()}>
  //       Blue Screen
  //     </Text>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container :{
    flex : 1 ,
    justifyContent : 'space-between' ,
    alignItems : 'center' ,
    backgroundColor : '#0D47A1' ,
  } ,
  welcome : {
    fontSize : 20 ,
    textAlign : 'auto' ,
    margin : 10 ,
    color : '#ffffff'
  } ,
  list : {
    flex : 1 ,
    padding : 30 ,
    backgroundColor : 'rgb(39 , 174 , 96)' ,
  } ,
  row : {
    margin : 8 ,
    flexDirection : 'row' ,
    justifyContent : 'space-between' ,
  } ,
  title : {
    fontSize : 20 ,
    color : 'white' ,
  }
});

export default BlueScreen;
