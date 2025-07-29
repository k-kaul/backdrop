import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
    return <SafeAreaView>
        <Text>Hi from home screen</Text>
    </SafeAreaView>
}

function ProfileScreen(){
    return <SafeAreaView>
        <Text>Hi from Profile Screen</Text>
    </SafeAreaView>
}