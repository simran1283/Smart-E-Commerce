import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../store/reducers/cartSlice"
import { Product } from "../../../store/reducers/ReducerModel/CartModel"
import getProducts from "../Services/HomeDataService"
import { useState } from "react"

const useHome = () => {

    const [products,setProducts] = useState<Product []>([])
    const [isRefreshing,setIsRefreshing] = useState(false)

    const handleRefresh = async() => {
        setIsRefreshing(true)
        const data = await getProducts()
        setProducts(data)
        setIsRefreshing(false)
    }

    const dispatch = useDispatch()

    const onAddToCart = (item : Product) => {
        dispatch(addItemToCart(item))
    }

    const fetchProducts = async () => {

        const data = await getProducts()
        setProducts(data)
    }

    return {
        onAddToCart,
        fetchProducts,
        products,
        isRefreshing,
        handleRefresh
    }
}

export default useHome