import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatHomeScreen from '../Chat_App/src/Chat_home/ChatHomeScreen';
import ChatScreen from './src/chat/ChatScreen';
import { StatusBar } from 'react-native';
import MyTopTabs from './src/navigation/top_tab/TopTabBarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (<>
  <StatusBar
        backgroundColor="#6a51ae"
        barStyle="light-content"
        hidden={false}
      />
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="MyTopTabs">
        <Stack.Screen name="MyTopTabs" options={{headerShown:false}} component={MyTopTabs} />
        {/* <Stack.Screen name="ChatHomeScreen" options={{headerShown:false}} component={ChatHomeScreen} /> */}
        {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}; 

export default App;
