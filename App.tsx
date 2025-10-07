import FlashMessage, { showMessage } from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AppSafeView from './src/components/views/View/AppSafeView';
import { Provider } from 'react-redux';
import { Persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';


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
      <Provider store={store}>
        <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <FlashMessage position={"top"} />
          <MainAppStack />
        </NavigationContainer>
        </PersistGate>
      </Provider>
    </AppSafeView>

  );
}
