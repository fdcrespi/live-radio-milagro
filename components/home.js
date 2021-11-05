import { useCallback } from "react";
import * as React from "react";
import {Text , View, StyleSheet, Image, Linking, Button} from "react-native";
import {Video} from 'expo-av';
import imagePause from '../assets/ondas-sonoras-pause.png';
import imagePlay from '../assets/ondas-sonoras.gif';

import { FontAwesome } from '@expo/vector-icons';

const instagramURL = "https://www.instagram.com/mcymtresarroyos/?utm_medium=copy_link";
const youtubeURL = "https://www.youtube.com/c/MCyMTresArroyos";

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
      <Text style={styles.title}> Tabernaculo de los milagros </Text>
      <Image style={styles.image} source={status.isPlaying ? imagePlay : imagePause}/>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://node-09.zeno.fm/fnge482h268uv?rj-ttl=5&rj-tok=AAABfOY_WzkAQa2hCQKBbGYZyw',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttonContainer}>
        <FontAwesome.Button 
          style={styles.buttonPlay}
          name= {status.isPlaying ? 'pause' : 'play'} 
          backgroundColor="#3b5998" 
          onPress={() =>  status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
        </FontAwesome.Button>
  
        <FontAwesome.Button 
          disabled={status.isPlaying ? false : true}
          name= {!status.isMuted ? 'volume-up' : 'volume-off'} 
          backgroundColor="#3b5998" 
          onPress={() => status.isPlaying ? video.current.setIsMutedAsync(!status.isMuted) : video.current.setIsMutedAsync(true)}>
        </FontAwesome.Button>
      </View>
      
      <View style={styles.buttonContainer}>
        <OpenURLButton styles={styles.button} url={instagramURL}>Instagram</OpenURLButton>
        <OpenURLButton styles={styles.button} url={youtubeURL}>YouTube</OpenURLButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#96613f'
  },
  title: {
    textAlign: "center",
    color: 'white',
    fontSize: 30,
  },
  video: {
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 15,
    elevation: 5,
    aspectRatio: 16 / 9,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonPlay: {
    textAlign: 'center',
  }
});

export default HomeScreen;