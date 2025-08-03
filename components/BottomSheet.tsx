import { Colors } from '@/constants/Colors';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import React, { useCallback, useRef } from 'react';
import { Image, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export const DownloadPicture = ({ onClose, wallpaper }:{
    onClose: () => void;
    wallpaper: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

const theme = useColorScheme() ?? 'light';
  // renders
  return (
    // <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        index={1}
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["92%"]}
        enablePanDownToClose={true}
        handleIndicatorStyle={{display: 'none'}}
        handleStyle={{display: 'none'}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ThemedView style={{flex:1}}>
            <Image style={styles.image} source={{uri:wallpaper.url}} />
            <View style={styles.topBar}>
              <Ionicons 
                onPress={onClose}
                name={'close'} 
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
              />
              <View style={styles.LikeShare}>
                <Ionicons 
                name={'heart'} 
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingRight: 10}}
              />
              <Ionicons 
                name={'share'} 
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingRight: 5}}
              />
              </View>
            </View>
            <ThemedView style={styles.textContainer}>
              <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
            </ThemedView>
            <DownloadButton url={wallpaper.url}/>
          </ThemedView>
        </BottomSheetView>
      </BottomSheet>
    // </GestureHandlerRootView>
  );
};

function DownloadButton({ url }:{ url: string }){
  const theme = useColorScheme() ?? 'light';
  return <Pressable onPress={async () => {
    let date = new Date().getTime();
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`; 
    
    try {
      console.log(url)
      console.log(fileUri)
      await FileSystem.downloadAsync(url, fileUri); 
      const resposne = await MediaLibrary.requestPermissionsAsync(true);
    
      if(resposne.granted){
        MediaLibrary.createAssetAsync(fileUri);
        alert('Downloaded')
      } else {
        console.error("Permission Denied")
      }
    
    } catch (error) {
      console.error('FS Error',error);
    }

  }} style={{
    backgroundColor: 'black',
    padding:10,
    marginHorizontal: 40,
    marginVertical:20,
    borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
    borderWidth:1,    
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius:10,

  }}>
    <Ionicons 
      name={'download'} 
      size={24}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      style={{paddingRight: 5}}
    />
    <Text style={{ 
      fontSize: 20, 
      color: 'white', 
      fontWeight: '600', 

      }}>Download</Text>

  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    height:'100%',
    // backgroundColor: 'red',
    // paddingTop:10
    // alignItems: 'center',
  }, image: {
    height: '70%',
    borderRadius: 15,
  }, topBar: {
    position: 'absolute',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  }, LikeShare: {
    display: 'flex',
    flexDirection: 'row',
  }, 
  textContainer: {
    width: '100%'
  }, 
  text: {
    padding: 20,
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',

  }


});