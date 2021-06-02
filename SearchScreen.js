import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,Image,ImageBackground,Dimensions,FlatList} from 'react-native';
import { ListItem } from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SearchScreen extends Component{
constructor(){
    super();
        this.state={
            disease:'',
            keyWord:'',
            allData:[]
        }
}


keyExtractor = (item,index) => index.toString()
renderItem = ({ item, i }) => {
  return (
    <TouchableOpacity>
    <ListItem key={i} bottomDivider>
      <View style={{backgroundColor:"#ffffff"}}>
      <ListItem.Content>
        <ListItem.Title style={{color:'#ff0000'}}>{"Name: " +item.Type }</ListItem.Title>
        <ListItem.Subtitle style={{color:'#ff0000'}}>{"Symptons " + item.symptoms}</ListItem.Subtitle>
        <Text style={{color:'#ff0000'}}>{"Precausions " + item.precautions }</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </View>

    </ListItem></TouchableOpacity>
  );
};


filterResultByDisease=(disease)=>{
  var allData= []
  var text1 = disease.toUpperCase()

      var data = db.collection('Disease').where("Type","==",text1).onSnapshot((snapshot)=>{
        var allData = snapshot.docs.map((doc) => doc.data())
        this.setState({
          allData : allData
        });
      })
      
  
}


filterResultByKeyword=(keyWord)=>{
  var allDataMain= []
  var text2 = keyWord.toLowerCase()

  var data = db.collection('Disease').onSnapshot((snapshot)=>{
    var allData = snapshot.docs.map((doc) => doc.data())
   for( var i=0;i<allData.length;i++){
     var symptoms= allData[i].symptoms
          for(var j in symptoms){
            if(symptoms[j]==text2){
                allDataMain.push(allData[i])
            }
            
          }
         }
    this.setState({
      allData : allDataMain
    });
  })
  
}


  render(){
    return(
        <View style={styles.container}>
         <MyHeader title="Search" navigation={this.props.navigation}/>
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBox}
          placeholder="search by disease"
          onChangeText={(text)=>{this.setState({disease:text})}}
          value={this.state.disease}/>
        <TouchableOpacity onPress={()=>{this.filterResultByDisease(this.state.disease)}}
          style={styles.scanButton}
         >
          <Text style={styles.buttonText}>search</Text>
        </TouchableOpacity>
        </View>
        <Text>OR</Text>
        <View style={styles.inputView}>
        <TextInput 
          style={styles.inputBox}
          placeholder="search by KeyWord"
          onChangeText={(text)=>{this.setState({keyWord:text})}}
          value={this.state.keyWord}/>
        <TouchableOpacity onPress={()=>{this.filterResultByKeyword(this.state.keyWord)}}
          style={styles.scanButton}
         >
          <Text style={styles.buttonText}>search</Text>
        </TouchableOpacity>
       </View>
       <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allData}
              renderItem={this.renderItem}
            />
       </View>
        
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#1ff7ff',
   alignItems: 'center',
   justifyContent: 'center'
 },
   buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'row',
    margin:20,
  },
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
 
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 
})