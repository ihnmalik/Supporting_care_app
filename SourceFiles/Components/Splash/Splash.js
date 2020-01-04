import React , {Component} from 'react'
import {StyleSheet, Image, View,ImageBackground,Text,TouchableOpacity} from 'react-native';


export default class Splash extends Component{
    constructor(props){
        super(props)
        this.state={timer: 0}
       
}
render(){
    return(
        <View style={styles.container}>
        
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Image 
       style={styles.logo}
       source={require('../../../img/splash.png')}/>
       
       <Text style={styles.text}>Tap to Continue</Text>
       </TouchableOpacity>
     
     
       
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

},

logo:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'12%',
    marginTop:'1%',
     
        
         
},
text:{
    color:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'37%',
    fontWeight:'300',
    fontSize:14
}


})