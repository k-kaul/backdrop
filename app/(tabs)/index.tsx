import SplitView from "@/components/SplitView";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { useCarousel } from "@/hooks/useCarousel";
import { useWallpapers } from "@/hooks/useWallpapers";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";
import Carousel from 'react-native-reanimated-carousel';

const TOPBAR_HEIGHT = 300;

export default function Explore(){{
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();
    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(yOffset, [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT], [2,1,1])
                }
            ]
        }
    })

    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(yOffset, [-TOPBAR_HEIGHT, TOPBAR_HEIGHT/2, TOPBAR_HEIGHT], [1,1,1])
        }
    })

    return <ThemedSafeAreaView style={{flex:1}}>
            <Animated.View style={[{height: TOPBAR_HEIGHT - yOffset}, headerAnimatedStyle
            ]}>
                <Carousel
                    loop
                    width={width}
                    height={TOPBAR_HEIGHT - yOffset}
                    autoPlay={true}
                    data={carouselItems}
                    scrollAnimationDuration={2000}
                    // onSnapToItem={}
                    renderItem={({ index }) => (
                    <>
                        <View
                            style={{
                                flex:1,
                                borderWidth: 1,
                                justifyContent:'center',
                            }}
                            >
                            <Image source={{ uri:carouselItems[index].image }} style={{height:TOPBAR_HEIGHT}}/>
                        </View>
                        <LinearGradient 
                            colors={['transparent','black']} style={{flex:1, position:'absolute', zIndex:10, height:TOPBAR_HEIGHT/2, width:'100%', bottom:0}}>
                                <Animated.View style={textAnimatedStyle}>
                                    <Text 
                                        style={[{color:'white', paddingTop: TOPBAR_HEIGHT/3, textAlign:'center', fontSize:30, fontWeight:'500'}, ]}>
                                        {carouselItems[index].title}
                                    </Text>
                                </Animated.View>
                        </LinearGradient>
                    </>
                    )}
                />
            </Animated.View>
            <SplitView onScroll={(yOffset) => {
                setScrollY(yOffset);
                }} wallpapers={wallpapers}
                />

    </ThemedSafeAreaView>
}}