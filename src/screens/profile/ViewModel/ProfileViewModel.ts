import { useNavigation } from "@react-navigation/native"
import fetchUserOrders from "../Services/MyOrdersService"
import { useState } from "react"
import { SheetManager } from "react-native-actions-sheet"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { signOut } from "firebase/auth"
import { auth, db } from "../../../config/firebase"
import UserProfile from "../Views/UserProfile"
import { collection, doc, getCountFromServer } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"


const useProfile = () => {

    const [userOrders,setUserOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [totalOrders,setTotalOrders] = useState(0)

    const userData = useSelector((state :RootState) => state.userSlice.userData)
    const userId = userData?.uid

    const navigation = useNavigation()

    const onMyOrdersPress = () => {
        navigation.navigate("MyOrders")
    }

    const getProducts = async () =>{
        setIsLoading(true)
        const res = await fetchUserOrders()
        console.log(res)
        setUserOrders(res)
        setIsLoading(false)
    }

    const showBottomSheet = () => {
        SheetManager.show("LANG_SHEET")
    }

    const handleLogout = async () => {
        await AsyncStorage.removeItem("USER_DATA")
        navigation.navigate("Authstack")
        await signOut(auth)
    }

    const handleUserProfile = () => {
        navigation.navigate("UserProfile")
    }

    const getTotalDocs = async() =>{ 
        const userOrderRef = collection(doc(db,"users",userId),"orders")
        const snapshot = await getCountFromServer(userOrderRef)
        const count =  snapshot.data().count
        setTotalOrders(count)
    }



    return {
        onMyOrdersPress,
        getProducts,
        userOrders,
        showBottomSheet,
        handleLogout,
        isLoading,
        handleUserProfile,
        totalOrders,
        getTotalDocs
    }
}

export default useProfile