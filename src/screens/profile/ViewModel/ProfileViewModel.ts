import { useNavigation } from "@react-navigation/native"


const useProfile = () => {
    const navigation = useNavigation()

    const onMyOrdersPress = () => {
        navigation.navigate("MyOrders")
    }

    return {
        onMyOrdersPress
    }
}

export default useProfile