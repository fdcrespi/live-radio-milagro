import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import  TextArea from "./textArea";
import SocialLinks from "./socialLinks"
import Footer from "./footer"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const prayerRequest = ()=>{ 

  return (   
    
    
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle = {{ flex: 1 }}>  
        <View style={styles.header}>
          <Text style={styles.title}>PEDIDOS DE ORACIÓN</Text>          
          <Image source={require('../images/microphone.png')} style={styles.inImage}/>
        </View>
        
        <View style={styles.textArea}>          
          <TextArea></TextArea>
        </View>
        
        <View style={styles.social}>
          <SocialLinks/>
          <Footer/>
        </View>  
        
      </KeyboardAwareScrollView> 
    
          
  );
}

const styles = StyleSheet.create({
  container: {    
    width: "100%",
    backgroundColor: '#96613f',
    paddingTop:'2%',
  },
  header:{
    
    flexDirection: "row",    
    justifyContent: "space-evenly",
  },
  title:{
    alignSelf:"center",
    paddingLeft:"8%",    
    fontSize: 25,
    textAlign:"left",
    color:"#d6966d",  
    flex:10,
  },      
  inImage:{    
    height: "100%",
    resizeMode:"contain",
    flex:3,
   },   
  textArea:{
    minHeight: 320,
    display:'flex',
    justifyContent: "flex-start",
    flex: 6,
  },
  social:{ 
    minHeight: 120,
    flex: 2,
    justifyContent: "flex-end",
  }
});


export default prayerRequest;

