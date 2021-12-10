import React, { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomePage from './components/home'
import PrayerRequest from './components/prayerRequest';



function HomeScreen({ navigation }) {
  return (
    <HomePage />
  );
}

function prayerReq() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PrayerRequest/>
    </View> 
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
        <DrawerItem
          label="Cerrar"
          onPress={() => props.navigation.closeDrawer()}
        /> 
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {

  const[fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if(!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      'Glacial': require('./assets/fonts/GlacialIndifference-Bold.otf'),
      'Waverly': require('./assets/fonts/WaverlyCF-Bold.otf'),
    });
    setFontsLoaded(true);
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      
      <NavigationContainer theme={MyTheme} style={style.nav} >
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Radio en Vivo" component={HomeScreen} />
          <Drawer.Screen name="Pedidos de Oración" component={prayerReq} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};

const MyTheme = {
  dark: true,
  colors: {
    primary: 'white',
    background: 'rgb(242, 242, 242)',
    card: '#96613f',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',   

  },

};

const style = StyleSheet.create({
  nav: {
    fontFamily: 'Glacial',
    
  }
});

export default App;