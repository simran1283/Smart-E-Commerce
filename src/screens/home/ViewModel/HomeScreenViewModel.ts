import { useDispatch } from "react-redux"
import { addItemToCart } from "../../../store/reducers/cartSlice"
import { Product } from "../../../store/reducers/ReducerModel/CartModel"
import getProducts from "../Services/HomeDataService"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

const useHome = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const navigation = useNavigation()

    const handleRefresh = async () => {
        setIsRefreshing(true)
        const data = await getProducts()
        setProducts(data)
        setIsRefreshing(false)
    }

    const dispatch = useDispatch()

    const onAddToCart = (item: Product) => {
        dispatch(addItemToCart(item))
    }

    const fetchProducts = async () => {
        setIsLoading(true)
        const data = await getProducts()
        setProducts(data)
        setIsLoading(false)
    }

    const handleDetail = () => {
        navigation.navigate("ProductDetail")
    }

    return {
        onAddToCart,
        fetchProducts,
        products,
        isRefreshing,
        handleRefresh,
        isLoading,
        handleDetail
    }
}

export default useHome