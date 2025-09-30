import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../store/reducers/cartSlice"
import { Product } from "../../../store/reducers/ReducerModel/CartModel"

const useHome = () => {

    const dispatch = useDispatch()

    const onAddToCart = (item : Product) => {
        dispatch(addItemToCart(item))
    }

    return {
        onAddToCart
    }
}

export default useHome