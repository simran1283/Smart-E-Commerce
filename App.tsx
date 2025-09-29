import FlashMessage, { showMessage } from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import { sharedPaddingHorizontal } from './src/styles/shared-styles';


export default function App() {

  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf")
  })

  if (!fontLoaded)
    return (
      <ActivityIndicator size={'large'} />
    )

  return (
    <AppSafeView>
      <NavigationContainer>
        <FlashMessage position={"top"} />
        <MainAppStack />
      </NavigationContainer>
    </AppSafeView>
  );
}
