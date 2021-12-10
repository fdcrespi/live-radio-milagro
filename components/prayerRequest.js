import React, {  useState  } from "react";
import { View, StyleSheet, Alert,Keyboard, TouchableWithoutFeedback} from "react-native";
import  TextArea from "./textArea";
import SocialLinks from "./socialLinks"
import Footer from "./footer"
import Title from "./titlePrayerRequest"


 const prayerRequest =()=>{ 
  
    const flexValues = [0, 1];    
    const [flexValue, setFlexValue] = useState(1);  
    const flexValuesfoot = [0, 1];    
    const [flexValuefoot, setFlexValuefoot] = useState(1);    
    
    const typesOfStyles = {
      flex: flexValues[flexValue],
           
    };
    const typesOfStylesfoot = {
      flex: flexValuesfoot[flexValuefoot],      
    };   

    const changeStyle = () => {
      setFlexValue(0);  
      setFlexValuefoot(0);
    };
    
    const changeStyleOld = () => {      
       
        setFlexValue(1);
        setFlexValuefoot(1);
        Keyboard.dismiss()   
      
             
     
    };
    return (   
      <View style={styles.container}>
        <View style={[styles.header, typesOfStyles]}>
         <Title></Title>
        </View>
        <TouchableWithoutFeedback onPress={()=> 
          changeStyleOld()
        }>
        <View style={styles.textArea}  onTouchStart={()=> changeStyle()}>          
          <TextArea ></TextArea>
        </View>
        </TouchableWithoutFeedback>
        <View style={[styles.social, typesOfStylesfoot]}>
          <SocialLinks/>
          <Footer/>
        </View>         
              
      </View>  
    );
  }
//}
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
    flex:4,
  },
  social:{   
    flex:1,
    
  },  
});


export default prayerRequest;

