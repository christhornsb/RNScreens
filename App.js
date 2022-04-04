import React, { useState, useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { SignIn, OnBoarding } from './screens';

const Stack = createStackNavigator();

const App = () => {

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         screenOptions={{
  //           headerShown: false,
  //         }}
  //         initialRouteName={"SignIn"}
  //       >
  //         <Stack.Screen name="SignIn" component={SignIn} />
  //         <Stack.Screen name="Otp" component={Otp} />
  //         <Stack.Screen name="Register" component={Register} />
  //         <Stack.Screen name="PickLocation" component={PickLocation} />
  //         <Stack.Screen name="Home" component={Tabs} />
  //         <Stack.Screen name="UserSettings" component={UserSettings} />


  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
  // else {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"SignIn"}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />



        </Stack.Navigator>
      </NavigationContainer>
    )
  
}

export default App;