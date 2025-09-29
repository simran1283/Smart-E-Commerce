import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack"
import BottomTabs from "./BottomTabs"
import CheckoutScreen from "../screens/cart/View/CheckoutScreen"


const MainAppStack = () => {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="Authstack" component={AuthStack}/>
            <Stack.Screen name="BottomTabs" component={BottomTabs}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
        </Stack.Navigator>
    )
}

export default MainAppStack