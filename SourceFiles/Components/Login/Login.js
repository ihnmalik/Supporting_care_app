import React , {Component} from 'react'
import {StyleSheet, Image, View,ImageBackground,Text,TouchableOpacity,TextInput} from 'react-native';


export default class Splash extends Component{
    constructor(props){
        super(props)
        this.state={timer: 0}
       
}
render(){
    return(
        <View style={styles.container}>
        
       
        <Image 
       style={styles.logo}
       source={require('../../../img/splash.png')}/>
        <TextInput style = {styles.input}

placeholder = "Email"
placeholderTextColor = "#333"
autoCapitalize = "none"
value={this.state.name}
onChangeText = {(text) => this.setState({ name: text })} />
 <TextInput style = {styles.input1}

placeholder = "Password"
placeholderTextColor = "#333"
autoCapitalize = "none"
value={this.state.name}
onChangeText = {(text) => this.setState({ name: text })} />
       
       <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.sendEmail} >
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton1}
               onPress={this.sendEmail} >
               <Text style = {styles.submitButtonText1}> Register </Text>
            </TouchableOpacity>
      
     
     
       
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    

},

logo:{
    flexDirection:'column',
    marginTop:'40%',
    marginLeft:'38%'
 
    
     
        
         
},
text:{
    color:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'37%',
    fontWeight:'300',
    fontSize:14
},
input: {
    margin:5,
    height: 10,
    flexDirection:'row',
    justifyContent:'center',
      alignItems:'center',
      fontSize:12,
      padding:20,
    borderRadius:6,
    marginBottom:10,
    marginTop:'2%',
    borderWidth:20,
    marginLeft:'26%',
    width:'40%',
    borderColor: '#d4d4d4',
    borderWidth: 1
 },

 submitButton: {
    flexDirection:'column',
      backgroundColor:'#4aa5a0',
      paddingVertical:14,
      width:290,
      marginBottom:20,
      marginTop:10,
      marginLeft:'32%',
      borderRadius:6,
      shadowColor:'#333',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
 },

 submitButton1: {
    flexDirection:'column',
      backgroundColor:'#377d8c',
      paddingVertical:14,
      width:220,
      marginBottom:20,
      marginTop:10,
      marginLeft:'36%',
      borderRadius:6,
      shadowColor:'#333',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
 },

 submitButtonText:{
    color: 'white',
    fontWeight:'400',
    fontSize:16,
    marginLeft:'40%'
 },

 submitButtonText1:{
    color: 'white',
    fontWeight:'400',
    fontSize:16,
    marginLeft:'35%'
 },
 input1: {
    margin:5,
    height: 10,
    flexDirection:'row',
    justifyContent:'center',
      alignItems:'center',
      fontSize:12,
      padding:20,
    borderRadius:6,
    marginBottom:10,
    marginTop:'1%',
    borderWidth:20,
    marginLeft:'26%',
    width:'40%',
    borderColor: '#d4d4d4',
    borderWidth: 1
 },


})