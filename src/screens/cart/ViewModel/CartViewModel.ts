import { useNavigation } from "@react-navigation/native"


const useCartViewModel = () => {

    const navigation = useNavigation()

    const onStartPress = () => {
        navigation.navigate("HomeScreen")
    }

    const onContinuePress = () => {
        navigation.navigate("CheckoutScreen")
    }

    return {
        onStartPress,
        onContinuePress
    }
}


export default useCartViewModel