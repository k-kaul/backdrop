import { DownloadPicture } from "@/components/BottomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Explore(){{
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)

    return <SafeAreaView style={{flex:1}}>
        <ParallaxScrollView 
            headerBackgroundColor={{dark:'black', light: "white"}} 
            headerImage={
                <Image style={{flex: 1}} source={{uri:wallpapers[2].url ?? ''}}/>
                }>
                
                <ThemedView style={styles.container}>
                    <View style={styles.innerContainer}>
                        <FlatList 
                            data={wallpapers.filter((_,index) => index % 2 === 0)}
                            renderItem={({item}) => <View style={styles.imageContainer}>
                                    <ImageCard 
                                        onPress={() => {
                                            setSelectedWallpaper(item)
                                        }} 
                                        wallpaper={item}/>
                                </View>}
                            keyExtractor={item => item.name}
                            />
                    </View>
                    <ThemedView style={styles.innerContainer}>
                        <FlatList 
                            data={wallpapers.filter((_,index) => index % 2 === 1)}
                            renderItem={({item}) => <View style={styles.imageContainer}>
                                        <ImageCard 
                                            onPress={() => {
                                                setSelectedWallpaper(item)
                                            }} 
                                            wallpaper={item}/>
                                    </View>}
                            keyExtractor={item => item.name}
                            />
                    </ThemedView>
                </ThemedView>
        </ParallaxScrollView>
        {
            selectedWallpaper && <DownloadPicture onClose={() => setSelectedWallpaper(null)}/>
        }
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