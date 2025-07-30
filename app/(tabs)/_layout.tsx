import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout(){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
            <Tabs.Screen 
            name="foryou"
            options={{
                title: 'For You',
                tabBarIcon: ({color}) => <FontAwesome size={20} name='home' color={color}/>
            }}
            />
            <Tabs.Screen 
            name="index"
            options={{
                title: 'Explore',
                tabBarIcon: ({color}) => <FontAwesome size={20} name='cog' color={color}/>
            }}
            />
            <Tabs.Screen 
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({color}) => <FontAwesome size={20} name='cog' color={color}/>
            }}
            />
        </Tabs>
    )
}