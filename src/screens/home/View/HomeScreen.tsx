import HomeHeader from "../../../components/Headers/View/HomeHeader"
import { FlatList } from "react-native"
import ProductCard from "../../../components/Cards/View/ProductCard"
import { products } from "../../../data/products"
import { vs } from "react-native-size-matters"
import useHome from "../ViewModel/HomeScreenViewModel"
import { useEffect } from "react"

// Home screen will display a list of product cards

const HomeScreen = () => {

    const { onAddToCart, fetchProducts, products } = useHome()

    useEffect(()=>{
        fetchProducts()
    },[])
    
    return (
        <>
            <HomeHeader />
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        ImageURL={item.imageURL}
                        price={item.price}
                        title={item.title}
                        onAddtoCartPress={()=> onAddToCart(item)}
                    />
                )}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: vs(10)
                }}
                contentContainerStyle={{
                    paddingHorizontal: vs(10)
                }}
                showsVerticalScrollIndicator = {false}
            />
        </>
    )
}

export default HomeScreen