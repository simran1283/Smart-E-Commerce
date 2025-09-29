import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/auth/View/Signin";
import SignUpScreen from "../screens/auth/View/Signup";

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