import { useCallback } from "react";
import * as React from "react";
import { Text, View, StyleSheet, Image, Linking, Button } from "react-native";
import { Video } from "expo-av";
import microphone from "../assets/microphone.png";

import SocialLinks from "./socialLinks";
import Footer from "./footer";

import { FontAwesome, Foundation} from "@expo/vector-icons";

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
      
      <View style={styles.inLive}>
        <View style={{justifyContent: "center"}}>
          <FontAwesome name="circle" size={24} color="red" />
        </View>
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
          playsInline
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)} 
        />

        <View style={styles.buttonVideo}>
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
            style={styles.iconPause}
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

      <View style={styles.footer}>
        <SocialLinks/>
        <Footer />
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
    justifyContent: "center",
    alignItems: "center",
    flex: 6
  },
  video: {
    alignSelf: "center",
    overflow: "hidden",
    width: 0,
    height: 0,
  },
  image: {
    width: "50%",
    height: "50%", 
    flex: 2
  },
  buttonVideo: {
    justifyContent: "center",
    flex: 1
  },
  inLive: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 0,
    top: 0,
    right: 0,
    flex: 1,
  },
  live: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  iconPause: {
    marginTop: 15,
  },
  footer: {
    justifyContent: "flex-end",
    flex: 3,
  }
});

export default HomeScreen;
