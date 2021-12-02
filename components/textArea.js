import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Keyboard} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {addPrayer} from '../api';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={250}
    />
  );
}



const UselessTextInputMultiline = () => {
  /* function validation(){
     if (message.mess!='' && message.nom!=''){
      send.disabled=false;
    } 
  } */


  const [nombre, onChangeNombre] = React.useState(nombre);
  const [msj, onChangeMsj] = React.useState(msj);
  const message={
    nom:nombre,
    mess:msj
  }
  const PrayerAlert = () =>{
     if(message.nom!=''&& message.mess!=''){
      Alert.alert('Plegaria Enviada', nombre+ ', su oración ha sido enviada correctamente', [
        {
           text: 'OK', onPress: () => { onChangeNombre(''),onChangeMsj(''), addPrayer(message)},  },
      ]);
     }
     else {
      Alert.alert('Error', 'Debe ingresar su nombre y una oración ', [
        {
           text: 'OK' },
      ]);
     }
     
    
  }

   
  return (
    <TouchableWithoutFeedback onPress={()=>
    Keyboard.dismiss()
   }>
     <View style={styles.container}>      
      <Text style={styles.text}>Apellido y Nombre</Text>
      <TextInput id='nombre' value={nombre} style={styles.input} onChangeText={nombre => onChangeNombre(nombre)}  />      
      <Text style={styles.text}>Mensaje</Text>
      <UselessTextInput
        multiline
        numberOfLines={4}        
        value={msj}
        onChangeText={msj => onChangeMsj(msj)}
        style={{padding: 24, backgroundColor:"#d6966d",color:"white", borderRadius:5, marginTop:5}}
      />      
      <TouchableOpacity
        onPress={PrayerAlert}
        label='send'
        style={styles.buttonSend}  >{/* ojo agregar disable, para que se active solo cuando los campos tengan algo */}
        <Text style={{ fontSize: 20, textAlign:'center', marginTop:5, color: '#fff' }}>Enviar</Text>
      </TouchableOpacity>
    </View>
   </TouchableWithoutFeedback>
    
    
  );
}




const styles = StyleSheet.create({
container:{
  paddingHorizontal:20,  
  paddingBottom:"45%",
  paddingTop:"5%"
},
buttonSend:{  
  alignSelf:"center",
  color:'white', 
  backgroundColor:"#d6966d",
  width:"45%",
  borderRadius:20,
  paddingBottom:"3%",
  marginTop:15,
},
input:{
  borderBottomColor:"#d6966d", 
  borderBottomWidth:1,  
  color:"white",
  paddingBottom:"3%",
},
text:{
  color:"#d6966d",
  paddingBottom:"3%",
  paddingTop:"3%"
},

alertSend:{
  color:"red",
},
});
export default UselessTextInputMultiline;