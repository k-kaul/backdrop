import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
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