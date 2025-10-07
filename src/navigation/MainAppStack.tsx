import { createStackNavigator } from "@react-navigation/stack"
import AuthStack from "./AuthStack"
import BottomTabs from "./BottomTabs"
import CheckoutScreen from "../screens/cart/View/CheckoutScreen"
import MyOrdersScreen from "../screens/profile/Views/MyOrdersScreen"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../store/reducers/userSlice"
import { useEffect, useState } from "react"
import { RootState } from "../store/store"
import { ActivityIndicator, View } from "react-native"
import { AppColors } from "../styles/colors"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebase"
import { setUserId } from "../store/reducers/cartSlice"

// Main App Stack that is the parent navigation for all other navigations 
// Conditionally rendering of screens on the basis of if user is loggedin or not

const MainAppStack = () => {

    const Stack = createStackNavigator()

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState<boolean>(true)
    // const [userData, setUserData] = useState<object | null>(null)

    const userData = useSelector((state : RootState) => state.userSlice.userData)

    useEffect(()=>{
        onAuthStateChanged(auth,(userDataFromFirebase)=>{
            if(userDataFromFirebase){
                console.log("User Logged IN")
                setIsLoading(false)
                // setUserData(userDataFromFirebase)
                const userOBJ = {
                    uid : userDataFromFirebase.uid,
                   email : userDataFromFirebase.email
                }
                dispatch(setUserData(userOBJ))
                dispatch(setUserId(userOBJ.uid))
            }else{
                console.log("User Logged OUT")
                setIsLoading(false)
                 dispatch(setUserData(null))
                 dispatch(setUserId(null))
            }
        })
    },[])
    console.log(JSON.stringify(userData,null,3))

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