import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import icono from "../assets/templo.png";

const footer = () => {
  return (  
    <View style={styles.container}>
      <Image
        style={styles.icono}
        source= {icono}
      />
      <Text style={styles.texto}> Tabernáculo de milagros </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  icono: {
    width: 80,
    height: 75
  },
  texto: {
    fontFamily: "Waverly",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    justifyContent: "center"
  }
});

export default footer;