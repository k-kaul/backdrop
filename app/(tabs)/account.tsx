import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Appearance, Pressable, ScrollView, StyleSheet, useColorScheme } from "react-native";


export default function Account(){

    return <ThemedSafeAreaView style={{flex:1}}>
        <ScrollView style={{flex:1,}}>
            <Header />
            <ThemedView style={{flex:1, height:'100%'}}>
                <LoginButtons />
                <ThemeSelector />
                <About />
            </ThemedView>
        </ScrollView>
    </ThemedSafeAreaView>
    
}

function About(){
    return <ThemedView style={styles.margin}>
        <ThemedText style={styles.textBig}>About</ThemedText>
        <ThemedView style={{ marginTop:10 }}>
            <Pressable>
                <ThemedText style={{margin:10, fontSize:20}}>Account</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10, fontSize:20}}>Privacy Policy</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10, fontSize:20}}>Terms of Service</ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{margin:10, fontSize:20}}>Licences</ThemedText>
            </Pressable>
        </ThemedView>
    </ThemedView>
}

function ThemeSelector(){
    return <ThemedView style={styles.margin}>
            <ThemedText style={styles.textBig}>Settings</ThemedText>
            <ThemedText style={{marginVertical:5}}>Select a Theme</ThemedText>
            <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                <ThemeButton title="Dark" colorScheme='dark' selected={false}/>
                <ThemeButton title="Light" colorScheme='light' selected={false}/>
                <ThemeButton title="System" colorScheme={null} selected={false}/>
            </ThemedView>
        </ThemedView>
}

function ThemeButton({title, selected, colorScheme}:{
        title:string;
        selected: boolean;
        colorScheme: 'dark'|'light'|null;
    }){
        const theme = useColorScheme();
    return <Pressable 
                style={{padding:10, 
                    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text, 
                    borderWidth: 1, borderRadius: 5, flex:0.3, alignItems:'center'}}
                onPress={() => {
                    Appearance.setColorScheme(colorScheme);
                }}
                >
        <ThemedText>{title}</ThemedText>
    </Pressable>
}

function LoginButtons(){
    // const [pictureOpen,setPictureOpen] = useState(false);
    const theme = useColorScheme();

    return <>
        <AuthButton 
                label="Sign In"
                icon={<Ionicons 
                name='logo-google' 
                size={24}
                color={theme === 'light' ? Colors.light.text : Colors.dark.text}
                style={{paddingRight: 5}}
                />}  
            />
        <AuthButton 
            label="Sign In"
            icon={<Ionicons 
            name='logo-apple' 
            size={24}
            color={theme === 'light' ? Colors.light.text : Colors.dark.text}
            style={{paddingRight: 5}}
            />}  
        />
    </>
}

function AuthButton({ icon, label }: {
    icon: any;
    label: string;
}){
    const theme = useColorScheme() ?? 'light';

  return <Pressable style={{
    backgroundColor: theme,
    padding:10,
    marginHorizontal: 40,
    marginVertical:5,
    
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text,
  }}>
    {icon}
    <ThemedText style={{ 
      fontSize: 20, 
    //   color: 'white', 
      fontWeight: '600', 
      }}>{label}</ThemedText>

  </Pressable>
}

function Header(){
    return <ThemedView style={styles.topBar}>
        <ThemedText style={styles.textBig}>Backdrop</ThemedText>
        <ThemedText>Sign In to Save your Data</ThemedText>
    </ThemedView>
}

const styles = StyleSheet.create({
    textBig: {
        fontSize: 30,
        fontWeight: '600',
        height:35,
    }, 
    topBar: {
        padding: 30,
    },
    themeSelectorChild: {
        flex: 0.33
    }, 
    themeSelectorContainer: {
        flex: 1,
    }, 
    margin: {
        padding:30,
    }
})