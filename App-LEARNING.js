import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image ,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  const handlePress = ()=> console.log("Text pressed");

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea,styles.container]}>
      <Button
      color = "orange"
      title = "Click me"
      onPress={()=> alert("Button tapped")}
      />
      <Button title = "Click me" onPress={()=> Alert.alert("My title","My message",[
        {text : "Yes" , onPress : ()=> console.log("YES")},
        {text : "No", onPress : ()=> console.log("no")},
      ])}/>
      {/* IOS ONLY : PROMPT <Button title = "Click me" onPress={()=> Alert.prompt("My title","My MESSAGE", (text) => console.log(text))}/> */}
      <Text numberOfLines={1} onPress = {handlePress}>Hello worlufjsk, A really long line!!! soo long in fact that it doesnt get wrapper by one line!!</Text>
      <Image source = {require("./assets/icon.png")} style={{width: 100, height: 100}}/>
      {/* Since image itself is not touchable as it doesn't have an onpress prop : Also has onlongpress*/}
      <TouchableHighlight onPress = {()=>console.log("Image tapped.")}> 
        <Image source = {{
          // useful props: blurRadius , fadeDuration , resizeMode
          width : 200,
          height : 300,
          uri : "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
        }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : "center",
    alignItems : "center",
    
  },
});
