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
  Alert,
  Dimensions
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {

const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container]}>
      <View style = {{
        backgroundColor : "#fff",
        flex: 1,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"
      }}>
      <View style = {{
        backgroundColor:"gold",
        width : 100,
        height: 100,
        alignSelf: 'flex-start'
      }}/>
      <View style = {{
        backgroundColor:"tomato",
        width : 100,
        height: 200
      }}/>
      <View style = {{
        backgroundColor:"dodgerblue",
        width : 100,
        height: 100
      }}/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent : "center",
    // alignItems : "center",
    
  },
});
