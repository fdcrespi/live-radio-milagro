import { useCallback } from "react";
import * as React from "react";
import { Text, View, StyleSheet, Image, Linking, Button } from "react-native";
import { Video } from "expo-av";
import imagePause from "../assets/ondas-sonoras-pause.png";
import imagePlay from "../assets/ondas-sonoras.gif";
import microphone from "../assets/microphone.png";
import icono from "../assets/templo.png";

import { FontAwesome, AntDesign, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

const instagramURL =
  "https://www.instagram.com/mcymtresarroyos/?utm_medium=copy_link";
const youtubeURL = "https://www.youtube.com/c/MCyMTresArroyos";
const whatsappURL = "https://api.whatsapp.com/send?phone=+542983655609";
const webURL = "https://tabernaculodemilag.wixsite.com/tabernculodemilagros";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`la URL no se puede abrir: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const HomeScreen = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <View style={styles.inLine}>
        <FontAwesome name="circle" size={24} color="red" />
        <Text style={styles.live}> EN VIVO </Text>
      </View>
    
      <View style={styles.containerPlayer}>
        <Image
          style={styles.image}
          /* source={status.isPlaying ? imagePlay : imagePause} */
          source= {microphone}
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://node-09.zeno.fm/fnge482h268uv?rj-ttl=5&rj-tok=AAABfOY_WzkAQa2hCQKBbGYZyw",
          }}
          useNativeControls
          /* resizeMode="contain" */
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)} 
        />

        <View>
          <FontAwesome 
            name={status.isPlaying ? "pause" : "play"} 
            size={42} 
            color="#d6966d" 
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
         
          <Foundation
            name={!status.isMuted ? "volume" : "volume-strike"}
            size={42}
            /* color={status.isPlaying ? "#d6966d" : "gray"} */
            color="#d6966d"
            onPress={() =>
              status.isMuted
                ? video.current.setIsMutedAsync(!status.isMuted)
                : video.current.setIsMutedAsync(true)
            }
          />             
         
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AntDesign name="instagram" size={36} color="#d6966d" onPress={ ()=>{ Linking.openURL(instagramURL) }}/>
        <AntDesign name="youtube" size={36} color="#d6966d" onPress={ ()=>{ Linking.openURL(youtubeURL) }}/>
        <FontAwesome name="whatsapp" size={36} color="#d6966d" onPress={ ()=>{ Linking.openURL(whatsappURL) }} />
        <AntDesign name="link" size={36} color="#d6966d"  onPress={ ()=>{ Linking.openURL(webURL) }} />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.icono}
          source= {icono}
        />
      <Text style={styles.live}> Tabernáculo de milagros </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#96613f",
    flex: 1,
  },
  containerPlayer: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  video: {
    alignSelf: "center",
    /* overflow: "hidden", */
    borderRadius: 15,
    elevation: 5,
    aspectRatio: 16 / 9,

  },
  image: {
    width: "50%",
    height: "50%",
    marginBottom: 5, 
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  inLine: {
    alignSelf: "flex-end",
    flexDirection: "row",
    margin: 10,
    top: 0,
    right: 0,
  },
  live: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    justifyContent: "center"
  },
  icono: {
    width: 100,
    height: 75
  },
});

export default HomeScreen;
