import SplitView from '@/components/SplitView';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, useColorScheme } from 'react-native';


const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  
  const theme = useColorScheme() ?? 'light';
  
  return (
    <ThemedSafeAreaView style={styles.container}>
      <Tab.Navigator 
        style={{flex:1}}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].text,
          tabBarStyle: {
            backgroundColor: Colors[theme].background
          }, 
          tabBarIndicatorStyle: {
            backgroundColor:'orange',
            height: 3
          }
        }}
        >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </ThemedSafeAreaView>
  );
}

function LibraryScreen(){
  const wallpapers = useLibraryWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

function LikedScreen(){
     const wallpapers = useLikedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

function SuggestedScreen(){
   const wallpapers = useSuggestedWallpapers();

    return <ThemedView style={styles.container}>
        <SplitView wallpapers={wallpapers}/>
    </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})