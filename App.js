import React, { useCallback } from "react";
import {StyleSheet, Linking, Button, View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import HomePage from './components/home';
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
          onPress={() => this.prayerReq()}
        />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      
       <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Radio en Vivo" component={HomeScreen} >
        </Drawer.Screen>
        <Drawer.Screen name="Pedidos de Oración" component={prayerReq} >
      
      </Drawer.Screen>
      
       
        
        
      </Drawer.Navigator> 
      
    </NavigationContainer>
  );
};

export default App;