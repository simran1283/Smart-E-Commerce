import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack"
import BottomTabs from "./BottomTabs"
import CheckoutScreen from "../screens/cart/View/CheckoutScreen"
import MyOrdersScreen from "../screens/profile/Views/MyOrdersScreen"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setUserData } from "../store/reducers/userSlice"
import { useEffect } from "react"
import { RootState } from "../store/store"
import { ActivityIndicator, View } from "react-native"
import { AppColors } from "../styles/colors"

// Main App Stack that is the parent navigation for all other navigations 
// Conditionally rendering of screens on the basis of if user is loggedin or not

const MainAppStack = () => {

    const {userData, isLoading} = useSelector((state : RootState) => state.userSlice)

    const Stack = createStackNavigator()

    const dispatch = useDispatch()

    const isUserLoggedIn = async() =>{
        try {

            const storedUser = await AsyncStorage.getItem("USER_DATA")

        if(storedUser){
            dispatch(setUserData(JSON.parse(storedUser)))
        }else{
            dispatch(setLoading(false))
        }
            
        } catch (error) {
            console.log(error)
            dispatch(setLoading(false))
        }
        
    }

    useEffect(()=> {
        isUserLoggedIn()
    },[])

    if(isLoading){
        return (
            <View style={{flex : 1,alignItems : "center",justifyContent :"center"}}>
                <ActivityIndicator size={"large"} color={AppColors.black}/>
            </View>
        )
    }


    return(
        <Stack.Navigator screenOptions={{
            headerShown : false
        }} initialRouteName={userData ? "BottomTabs" : "Authstack"}>
            <Stack.Screen name="Authstack" component={AuthStack}/>
            <Stack.Screen name="BottomTabs" component={BottomTabs}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{
                headerShown : true
            }}/>
            <Stack.Screen name="MyOrders" component={MyOrdersScreen} options={{
                headerShown : true
            }}/>
        </Stack.Navigator>
    )
}

export default MainAppStack