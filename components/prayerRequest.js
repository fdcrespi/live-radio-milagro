import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import  TextArea from "./textArea";
import SocialLinks from "./socialLinks"
import Footer from "./footer"
import Title from "./titlePrayerRequest"

class prayerRequest extends Component {
  
  render() {
    
    return (   
      <View style={styles.container}>
        <View style={styles.header} >
         <Title></Title>
        </View>
        <View style={styles.textArea}>
          <TextArea></TextArea>
        </View>
        <View style={styles.social}>
          <SocialLinks/>
          <Footer />
        </View>       
      </View>  
    );
  }
}
const styles = StyleSheet.create({
  container: {    
    width:'100%',
    backgroundColor: '#96613f',
    paddingTop:'2%',
    flex:1,
  },
  header:{
    flex:1,    
  },
  textArea:{
    flex:6,
  },
  social:{   
    flex:2,
  },  
});
export default prayerRequest;

