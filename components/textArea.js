import React from 'react';
import {StyleSheet,Button, View, TextInput, Text} from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [nombre, onChangeNombre] = React.useState(nombre);
  const [msj, onChangeMsj] = React.useState(msj);

  return (
    
    <View
      style={styles.container}>
      <Text style={styles.text}>Apellido y Nombre</Text>
      <TextInput id='nombre' value={nombre} style={styles.input} onChangeText={nombre => onChangeNombre(nombre)}/>
      
      <Text style={styles.text}>Mensaje</Text>
      <UselessTextInput
        multiline
        numberOfLines={4}        
        value={msj}
        onChangeText={msj => onChangeMsj(msj)}
        style={{padding: 24, backgroundColor:"#d6966d", borderRadius:5, marginTop:5}}
      />
      <View style={styles.buttonSend}>
        <Button color='#d6966d' borderRadius="50" onPress={() => alert(nombre+' '+msj )} title="Enviar" />
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
container:{
  paddingHorizontal:20,  
},
buttonSend:{
  paddingTop:10,
  alignSelf:"center",
  color:'white', 
  width:"25%",
  borderTopEndRadius:25,
   
},
input:{
  borderBottomColor:"#d6966d", 
  borderBottomWidth:1,  
},
text:{
  color:"white",
}
});
export default UselessTextInputMultiline;