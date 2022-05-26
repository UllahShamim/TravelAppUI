import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./components/home";
import Details from "./components/details";
import Profile from "./components/profile";
import Liked from "./components/liked";

import Colors from "./assets/colors/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.orange,
        tabBarInactiveTintColor: Colors.grey,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Liked" component={Liked}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="TabNavigator" component={TabNavigator} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})


export default App;


