import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/View/Signin";
import SignUpScreen from "../screens/auth/View/Signup";

// Authentication Stack Navigation for login and signup screens

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