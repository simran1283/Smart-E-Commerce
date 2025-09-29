import { useNavigation } from "@react-navigation/native"


const useCartViewModel = () => {

    const navigation = useNavigation()

    const onStartPress = () => {
        navigation.navigate("HomeScreen")
    }

    return {
        onStartPress
    }
}


export default useCartViewModel