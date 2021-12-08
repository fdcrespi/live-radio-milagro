import React from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, Keyboard, Modal, Pressable} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {addPrayer} from '../api';
import { FontAwesome} from "@expo/vector-icons";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      editable
      maxLength={250}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [nombre, onChangeNombre] = React.useState(nombre);
  const [msj, onChangeMsj] = React.useState(msj);
  const message={
    nom:nombre,
    mess:msj
  }
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [msjModal, setModalText]= React.useState(msjModal);
  const [iconModal, setModalIcon]=React.useState(iconModal);

  const PrayerAlert = () =>{     
      if((message.nom!='' && message.mess!='')&&(message.nom!=undefined && message.mess!=undefined)){
        setModalText(message.nom+' su pedido de oración ha sido enviado correctamente.');
        onChangeNombre('');
        onChangeMsj('');
        addPrayer(message);     
        setModalIcon('check-circle'); 
     }
     else {     
      setModalText('Debe ingresar su nombre y una oración ');
      setModalIcon('times-circle');
     }        
     setModalVisible(true);
  }

   
  return (
    <TouchableWithoutFeedback onPress={()=>
    Keyboard.dismiss()
   }>
     <View style={styles.container}>      
      <Text style={styles.text}>Apellido y Nombre</Text>
      <TextInput value={nombre} style={styles.input} onChangeText={nombre => onChangeNombre(nombre)}  />      
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
        style={styles.buttonSend}>
        <Text style={{ fontSize: 20, textAlign:'center', marginTop:5, color: '#fff' }}>Enviar</Text>
      </TouchableOpacity>
    </View>
    
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {          
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <FontAwesome 
            name={iconModal}
            size={42} 
            color='#96613f'                     
          />
            <Text style={styles.modalText}>{msjModal}</Text>            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>      
   </TouchableWithoutFeedback>   
  );
}

const styles = StyleSheet.create({
container:{
  paddingHorizontal:20,  
  paddingBottom:"3%",
  paddingTop:"5%"
},
buttonSend:{  
  alignSelf:"center",
  color:'white', 
  backgroundColor:"#d6966d",
  width:"45%",
  borderRadius:20,  
  marginTop:15,
  height:"15%",
},
input:{
  borderBottomColor:"#d6966d", 
  borderBottomWidth:1,  
  color:"white",
  paddingBottom:"3%",
},
text:{
  color:"#d6966d",  
  paddingTop:"3%"
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,  
},
modalView: {
  margin: 20,
  backgroundColor:"#d6966d", 
  borderColor: '#96613f', 
  borderWidth: 3,
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,  
},
buttonClose: {
  width:150,
  backgroundColor: "#96613f",
  borderColor:"#d6966d",
  borderWidth:1
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  color:"white",
},
});
export default UselessTextInputMultiline;