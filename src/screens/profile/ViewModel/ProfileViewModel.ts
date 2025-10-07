import { useNavigation } from "@react-navigation/native"
import fetchUserOrders from "../Services/MyOrdersService"
import { useState } from "react"
import { SheetManager } from "react-native-actions-sheet"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { signOut } from "firebase/auth"
import { auth } from "../../../config/firebase"


const useProfile = () => {

    const [userOrders,setUserOrders] = useState([])

    const navigation = useNavigation()

    const onMyOrdersPress = () => {
        navigation.navigate("MyOrders")
    }

    const getProducts = async () =>{
        const res = await fetchUserOrders()
        console.log(res)
        setUserOrders(res)
    }

    const showBottomSheet = () => {
        SheetManager.show("LANG_SHEET")
    }

    const handleLogout = async () => {
        await AsyncStorage.removeItem("USER_DATA")
        navigation.navigate("Authstack")
        await signOut(auth)
    }

    return {
        onMyOrdersPress,
        getProducts,
        userOrders,
        showBottomSheet,
        handleLogout
    }
}

export default useProfile