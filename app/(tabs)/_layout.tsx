import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import { useColorScheme } from 'react-native';
// import { Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout(){
    
    const theme = useColorScheme() ?? 'light';

    return (
        <Tabs 
            screenOptions={{
                    tabBarActiveTintColor: Colors[theme].tint, 
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: Colors[theme].background
                    }
                    }}>
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
                tabBarIcon: ({color}) => <FontAwesome size={20} name='search' color={color}/>
            }}
            />
            <Tabs.Screen 
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({color}) => <FontAwesome size={20} name='user' color={color}/>
            }}
            />
        </Tabs>
    )
}