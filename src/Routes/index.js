import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Home from '../Screens/Home'
import Splash from '../Screens/Splash';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default Routers;
