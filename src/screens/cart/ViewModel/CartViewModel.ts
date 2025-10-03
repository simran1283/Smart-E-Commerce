import { useNavigation } from "@react-navigation/native"
import { RootState } from "../../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, emptyCart, removeItemFromCart, removeProductFromCart } from "../../../store/reducers/cartSlice"
import { CartItem, Product } from "../../../store/reducers/ReducerModel/CartModel"
import { shippingFees, taxes } from "../../../constants/constants"
import * as yup from "yup"
import { addDoc, collection, doc } from "firebase/firestore"
import { orders } from "../../../data/orders"
import { showMessage } from "react-native-flash-message"
import { db } from "../../../config/firebase"

const useCartViewModel = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const { userData } = useSelector((state : RootState) => state.userSlice)

    const schema = yup.object({
        fullName: yup
            .string()
            .required("Name is Required")
            .min(3, "Name must be atleast 3 characters"),

        phoneNumber: yup.string()
            .required("Phone Number is Required")
            .matches(/^[0-9]+/, "Phone Number should contain only numbers")
            .min(10, "Phone Number must be atleast 10 characters"),

        detailedAddress: yup.string()
            .required("Address is required")
    })

    type FormData = yup.InferType<typeof schema>

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

    
    const onSaveOrder = async (formData: FormData) => {

        console.log(userData)

        try {

            const orderBody = {
                ...formData,
                items,
                createdAt : new Date(),
                totalItemsPrice,
                orderTotal
            }

            const userOrderRef = collection(doc(db,"users",userData.uid),"orders")
            await addDoc(userOrderRef,orderBody)

            const orderRef = collection(db,"orders")
            await addDoc(orderRef,orderBody)

            navigation.goBack()

            showMessage({
                type : "success",
                message : "Order Placed Successfully ! "
            })
            dispatch(emptyCart())
        }
        
        catch (error) {
            console.log("An error occurred",error)
            showMessage({
                type :"danger",
                message : "Ann error occurred !"
            })
        }

    }

    const items =  useSelector((state : RootState) => state.cartSlice.items)

    const totalItemsPrice = items.reduce((acc,item) => acc + item.price * item.qty,0)

    const orderTotal = totalItemsPrice + taxes + shippingFees


    return {
        onStartPress,
        onContinuePress,
        onDeletePress,
        onDecreasePress,
        onIncreasePress,
        items,
        totalItemsPrice,
        orderTotal,
        schema,
        onSaveOrder
    }
}


export default useCartViewModel