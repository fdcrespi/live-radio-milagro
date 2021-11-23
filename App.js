import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Font from 'expo-font';



import HomePage from './components/home'


function HomeScreen({ navigation }) {
  return (
    <HomePage />
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

  return (
    <NavigationContainer theme={MyTheme} style={style.nav}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Radio en Vivo" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'black',
    background: 'rgb(242, 242, 242)',
    card: '#96613f',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  }
};

const style = StyleSheet.create({
  nav: {
    fontFamily: 'Glacial',
  }
});

export default App;