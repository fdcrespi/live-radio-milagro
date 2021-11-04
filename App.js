import React, { useCallback } from "react";
import {Text , View, StyleSheet, Image, Linking, Button} from "react-native";
import {Video} from 'expo-av';
import imagePause from './assets/ondas-sonoras-pause.png';
import imagePlay from './assets/ondas-sonoras.gif';

const instagramURL = "https://www.instagram.com/mcymtresarroyos/?utm_medium=copy_link";
const youtubeURL = "https://www.youtube.com/c/MCyMTresArroyos";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
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
        <OpenURLButton styles={styles.button} url={instagramURL}>Instagram</OpenURLButton>
        <OpenURLButton styles={styles.button} url={youtubeURL}>YouTube</OpenURLButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgb(4, 2, 5)'
  },
  title: {
    textAlign: "center",
    color: 'white',
    fontSize: 30,
  },
  video: {
    height: 50,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default App;