import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../../chat/ChatScreen';
import ChatHomeScreen from '../../Chat_home/ChatHomeScreen';
import Calls from '../../call/CallScreen';
import Testing from '../../chatroom/ChatRoom';
const Tab = createMaterialTopTabNavigator();

const MyTopTabs = () => {
  return (
    <Tab.Navigator initialRouteName='ChatHomeScreen'>
      {/* <Tab.Screen name="ChatList" component={ChatHomeScreen} /> */}
      {/* <Tab.Screen name="Chat" component={ChatScreen} /> */}
      <Tab.Screen name="ChatHomeScreen" options={{headerShown:false,title:'Chats'}} component={ChatHomeScreen} />
      <Tab.Screen name="Chat" options={{title:'Contact'}} component={ChatScreen} />
      <Tab.Screen name="Calls" component={Testing} />
    </Tab.Navigator>
  );
}

export default MyTopTabs;