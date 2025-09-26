import { StatusBar } from 'expo-status-bar';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import { StyleSheet } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/Buttons/AppButton';
import AppTextInput from './src/components/Inputs/AppTextInput';

export default function App() {
  return (
    <>
    <FlashMessage position={"top"}/>
    <AppSafeView style={styles.container}>
     {/* <AppButton title={"Show Message"}
     backgroundColor="#8429a2ff"
     textColor='yellow'     
     onPress={()=>{
        showMessage({
          message : "Welcome to Smart E-commerce",
          color : "Yellow",
          type : "success"
        })
      }}
      disabled/>
      <AppText variant='medium'
      onPress={()=>{
        showMessage({
          message : "Welcome to Smart E-commerce",
          color : "Yellow",
          type : "success"
        })
      }}>Hello World !</AppText>
      <StatusBar style="auto" /> */}

      <AppTextInput placeholder='Enter message'/>
    </AppSafeView>  
      </>
  );
}


const styles = StyleSheet.create({
  container:{

  }
})
