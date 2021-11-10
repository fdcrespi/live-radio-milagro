import React, { useCallback } from "react";
import {StyleSheet, Linking, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { FontAwesome } from "@expo/vector-icons";

import HomePage from './components/home'


function HomeScreen({ navigation }) {
  return (
    <HomePage />
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} >
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
  return (
    <NavigationContainer theme={MyTheme} >
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
  },
};

export default App;