import { useNavigation } from "@react-navigation/native"
import { RootState } from "../../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, removeItemFromCart, removeProductFromCart } from "../../../store/reducers/cartSlice"
import { CartItem, Product } from "../../../store/reducers/ReducerModel/CartModel"
import { shippingFees, taxes } from "../../../constants/constants"


const useCartViewModel = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const onStartPress = () => {
        navigation.navigate("HomeScreen")
    }

    const onContinuePress = () => {
        navigation.navigate("CheckoutScreen")
    }

    const onDeletePress = (item : CartItem) => {
        dispatch(removeProductFromCart(item))
    }

    const onDecreasePress = (item : CartItem) => {
        dispatch(removeItemFromCart(item))
    }

    const onIncreasePress = (item : CartItem) => {
        dispatch(addItemToCart(item))
    }

    const items =  useSelector((state : RootState) => state.cartSlice.items)

    const totalItemsPrice = items.reduce((acc,item) => acc + item.price,0)

    const orderTotal = totalItemsPrice + taxes + shippingFees


    return {
        onStartPress,
        onContinuePress,
        onDeletePress,
        onDecreasePress,
        onIncreasePress,
        items,
        totalItemsPrice,
        orderTotal
    }
}


export default useCartViewModel