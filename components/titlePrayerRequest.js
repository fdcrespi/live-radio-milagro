import React, { Component,  } from "react";
import { View, Text, StyleSheet ,Image} from "react-native";


class titlePrayerRequest extends Component {
  
  render() {
    
    return (   
      <View style={styles.container}>
          <Text style={styles.title}>PEDIDOS DE ORACIÓN</Text>          
          <Image source={require('../images/microphone.png')} style={styles.inImage}/>        
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",    
    justifyContent: "space-evenly",
    flex:1,
  },
  title:{
    alignSelf:"center",
    paddingLeft:"8%",    
    fontSize:25,
    textAlign:"left",
    color:"#d6966d",  
    flex:10,
  },      
  inImage:{    
    
    height: "100%",
    resizeMode: 'contain',
    flex:3,
   },   
});

export default titlePrayerRequest;
