import * as React from "react";
import {StyleSheet, View, Linking} from "react-native"
import { FontAwesome, AntDesign} from "@expo/vector-icons";

const instagramURL =  "https://www.instagram.com/mcymtresarroyos/?utm_medium=copy_link";
const youtubeURL = "https://www.youtube.com/c/MCyMTresArroyos";
const whatsappURL = "https://api.whatsapp.com/send?phone=+542983521842";
const webURL = "https://tabernaculodemilag.wixsite.com/tabernculodemilagros";

const socialLinks = () => {
  return (
    <View style={styles.buttonContainer}>
      <AntDesign name="instagram" size={30} color="#d6966d" onPress={ ()=>{ Linking.openURL(instagramURL) }}/>
      <AntDesign name="youtube" size={30} color="#d6966d" onPress={ ()=>{ Linking.openURL(youtubeURL) }}/>
      <FontAwesome name="whatsapp" size={30} color="#d6966d" onPress={ ()=>{ Linking.openURL(whatsappURL) }} />
      <AntDesign name="link" size={30} color="#d6966d"  onPress={ ()=>{ Linking.openURL(webURL) }} />
    </View>
  );
}

const styles = StyleSheet.create({
 buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});


export default socialLinks;