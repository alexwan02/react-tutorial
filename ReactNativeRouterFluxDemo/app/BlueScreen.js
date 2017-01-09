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

// RenderSectionHeader add a section header to ListView
const SectionHeader = (props) => (
  <View style={styles.section_container}>
    <Text style={styles.section_text} >{props.character}</Text>
  </View>
)

const renderSectionHeader = (sectionData) => (
  <SectionHeader {...sectionData}/>
);
class BlueScreen extends Component {
  constructor(){
    super();

    const getSectionData = (dataBlob , sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob , sectionId , rowId) => dataBlob[`${rowId}`];
    const ds = new ListView.DataSource({
        rowHasChanged : (r1 , r2 ) => !immutable.is(r1 , r2) ,
        sectionHeaderHasChanged : (s1 , s2 ) => s1 != s2 ,
        getSectionData ,
        getRowData,
    });

    const {dataBlob , sectionIds , rowIds} = this.formatData(people);
    this.state = {
      dataSource : ds.cloneWithRowsAndSections(dataBlob , sectionIds , rowIds) ,
    }
  }

  formatData(data){
    // We're sorting by alphabetically so we need the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Need somewhere to store our data
    const dataBlob = {} ;
    const sectionIds = [];
    const rowIds = [];
    // Each section is going represent a letter in the alphabet so we loop over
    // the alphabet.
    for (let sectionId = 0 ; sectionId < alphabet.length ; sectionId ++){
      // Get the character we're currently looking for
      const currentChar = alphabet[sectionId];

      // Get users whose first name starts with the current letter.
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0)

      // If there are any users who have a first name starting with the current letter
      // then we'll add a new section otherwise we just skip over it
      if(users.length > 0){
        // Add a section id to our array so the ListView knows that we've got a new section
        sectionIds.push(sectionId);

        // Stores any data we would want to display in the section header , In our case we want
        // to show the current character.
        dataBlob[sectionId] = {character : currentChar};

        // Setup a new array that we can store the row ids for this setion
        rowIds.push([]);

        // Loop over the valid users for this section
        for(let id = 0 ; id < users.length ; id ++){
          // Create a unique row id for the data blob that the ListView can use for
          // reference
          const rowId = `${sectionId}:${id}`;
          // Push the row id to the row ids array. This is what listview will reference to
          // pull data from our data blob.
          rowIds[rowIds.length - 1].push(rowId);

          // Store the data we care about for the row.
          dataBlob[rowId] = users[id];
        }
      }
    }
    return {dataBlob , sectionIds , rowIds};
  }

  render(){
    return (

        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={renderRow}
          renderSeparator = {renderSeparator}
          renderHeader={renderHeader}
          renderFooter={renderFooter}
          renderSectionHeader={renderSectionHeader}/>

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
  } ,
  section_container : {
    flex : 1 ,
    padding: 8 ,
    justifyContent : 'center' ,
    backgroundColor : '#eaeaea' ,
  } ,
  section_text : {
    fontSize : 13 ,
  }
});

export default BlueScreen;
