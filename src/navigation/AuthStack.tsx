import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/SigninScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";


const AuthStack = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="SignInScreen" component={SigninScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack