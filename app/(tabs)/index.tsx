import ParallaxScrollView from "@/components/ParallaxScrollView";
import SplitView from "@/components/SplitView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Explore(){{
    const wallpapers = useWallpapers();

    return <SafeAreaView style={{flex:1}}>
        <ParallaxScrollView 
            headerBackgroundColor={{dark:'black', light: "white"}} 
            headerImage={
                <Image style={{flex: 1}} source={{uri:wallpapers[2].url ?? ''}}/>
                }>            
                
                <SplitView wallpapers={wallpapers}/>
                
        </ParallaxScrollView>
    </SafeAreaView>
}}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        gap: 5
    }, 
    imageContainer: {
        paddingVertical: 10
    }
})