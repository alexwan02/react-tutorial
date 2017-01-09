import React , {Component} from 'react';
import {
  StyleSheet ,
  Text ,
  Image ,
  View ,
  ListView ,
  TextInput ,
  TouchableOpacity ,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import immutable from 'immutable';

import people from './data/people';


// const countries = immutable.fromJS(people);

const Title = ({children}) => (
  <Text style={styles.title} onPress={() => Actions.maize()}>
    {children}
  </Text>
)

const Row = (props) => (
  <View style={styles.row_container}>
    <Image source={{uri : props.picture.large}} style={styles.row_photo}/>
    <Text style={styles.row_text}>
      {`${props.name.first} ${props.name.last}`}
    </Text>
  </View>
)

const renderRow = (rowData) => (
  <Row {...rowData}/>
)

// RenderSeparator add a separator to ListView
{/* The rowId is passed as a prop in this functin which works well for a key
  otherwise RN will throw a warnig */}
const renderSeparator = (sectionId , rowId) => (
  <View key={rowId}  style={styles.separator} />
)

// RenderHeader add a header to ListView

const renderHeader = (props) => (
    <View style={styles.header_container}>
        <TextInput style={styles.header_input}
          placeholder={'Search...'}
          onChangeText={(text) => console.log('Search for ' ,  text)}/>
    </View>
)

// RenderFooter add a footer to ListView
const renderFooter = (props) => (
  <View style={styles.footer_container}>
    <TouchableOpacity style={styles.footer_button}
      onPress={() => console.log('load more')}>
      <Text style={styles.footer_text}>Load More</Text>
    </TouchableOpacity>
  </View>
)
class BlueScreen extends Component {
  constructor(){
    super();
    const ds = new ListView.DataSource({
        rowHasChanged : (r1 , r2 ) => !immutable.is(r1 , r2) ,
    });

    this.state = {
      dataSource : ds.cloneWithRows(people) ,
    }
  }

  render(){
    return (

        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={renderRow}
          renderSeparator = {renderSeparator}
          renderHeader={renderHeader}
          renderFooter={renderFooter}/>

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
    paddingTop : 35 ,
    // padding : 30 ,
    marginTop : 30 ,
    marginBottom : 35 ,
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
  } ,
  separator : {
    flex : 1 ,
    height : StyleSheet.hairlineWidth ,
    backgroundColor : 'white' ,
  } ,
  header_container : {
    flex : 1  ,
    padding : 5 ,
    flexDirection : 'row' ,
    alignItems : 'center' ,
    backgroundColor : '#c1c1c1' ,
  } ,
  header_input : {
    height : 20 ,
    flex : 1 ,
    paddingHorizontal : 8 ,
    fontSize : 15 ,
    backgroundColor : '#ffffff' ,
    borderRadius : 2 ,
  } ,
  footer_container : {
    flex : 1 ,
    padding : 8 ,
    alignItems : 'center' ,
    justifyContent : 'center' ,
  } ,
  footer_button : {
    borderColor : '#8e8e8e' ,
    borderWidth : StyleSheet.hairlineWidth ,
    paddingHorizontal : 20 ,
    paddingVertical : 10 ,
    borderRadius : 5 ,
  } ,
  footer_text : {
    color : '#8e8e8e'
  } ,
  row_photo : {
    height : 40 ,
    width : 40 ,
    borderRadius : 20 ,
  } ,
  row_text : {
    marginLeft : 12,
    fontSize : 16 ,
    color : 'white' ,
  } ,
  row_container : {
    flex : 1 ,
    padding : 12 ,
    flexDirection : 'row' ,
    alignItems : 'center',
  }
});

export default BlueScreen;
