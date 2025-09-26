import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack"
import BottomTabs from "./BottomTabs"


const MainAppStack = () => {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}>
            <Stack.Screen name="Authstack" component={AuthStack}/>
            <Stack.Screen name="BottomTabs" component={BottomTabs}/>
        </Stack.Navigator>
    )
}

export default MainAppStack