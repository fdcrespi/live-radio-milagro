import React, { Component } from "react";
import { View, Text, StyleSheet, Button ,Image, Icon, ScrollView} from "react-native";
import  TextArea from "./textArea";
import SocialLinks from "./socialLinks"
import Footer from "./footer"


class prayerRequest extends Component {
 
  render() {
    return (   
      <View style={styles.container}>
        <Image style={styles.imageMicro} source={require('../images/microphone.png')}/>

        <Text style={styles.title}>PEDIDOS DE ORACIÓN</Text>
        <View>
          <TextArea></TextArea>
        </View>

        <SocialLinks/>
        <Footer />
      </View>  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: '#96613f',
    paddingTop:'2%'
  },
  title:{
    paddingBottom:'2%',
    fontSize:25,
    textAlign:"center",
    color:"#d6966d",
  },
  titleTaber:{    
    paddingTop:'10%',
    fontSize:20,
    textAlign:"center",
    color:"white",
  },
  image:{
    alignSelf:"center",
    height:'15%',
    width:'35%',
  },   
  imageMicro:{
    alignSelf:"flex-end",
    marginRight:20,
    height:'15%',
    width:'15%',    
  },  
  social:{
    marginTop:"10%",
    marginHorizontal:"20%",
    display:"flex",
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent:"space-evenly",
  }
  
});
export default prayerRequest;

/* 
export const sendEmail = {to, subject, body}=>{
  Linking.openUrl(`mailto:${to}?subject=${subject}&body=${body}`)
} */