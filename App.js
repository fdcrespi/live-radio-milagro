import React, { useCallback } from "react";
import {StyleSheet, Linking, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

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
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Radio en Vivo" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;