import { useNavigation } from "@react-navigation/native"
import fetchUserOrders from "../Services/MyOrdersService"
import { useState } from "react"
import { SheetManager } from "react-native-actions-sheet"


const useProfile = () => {

    const [userOrders,setUserOrders] = useState([])

    const navigation = useNavigation()

    const onMyOrdersPress = () => {
        navigation.navigate("MyOrders")
    }

    const getProducts = async () =>{
        const res = await fetchUserOrders()
        setUserOrders(res)
    }

    const showBottomSheet = () => {
        SheetManager.show("LANG_SHEET")
    }

    return {
        onMyOrdersPress,
        getProducts,
        userOrders,
        showBottomSheet
    }
}

export default useProfile