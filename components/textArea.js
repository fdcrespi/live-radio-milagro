import React from 'react';
import {StyleSheet,Button, View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';

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
  const [nombre, onChangeNombre] = React.useState(nombre);
  const [msj, onChangeMsj] = React.useState(msj);
  const PrayerAlert = () =>
    Alert.alert('Plegaria Enviada', nombre+ ', su oración ha sido enviada correctamente', [
      {
         text: 'OK', onPress: () => { onChangeNombre(''),onChangeMsj('')} },
    ]);
    
    
  return (
    
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
        style={styles.buttonSend}>
        <Text style={{ fontSize: 20, textAlign:'center', marginTop:5, color: '#fff' }}>Enviar</Text>
      </TouchableOpacity>
    </View>
    
  );
}




const styles = StyleSheet.create({
container:{
  paddingHorizontal:20,  
  paddingBottom:"45%",
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
}
});
export default UselessTextInputMultiline;