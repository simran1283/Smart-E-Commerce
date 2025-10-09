import HomeHeader from "../../../components/Headers/View/HomeHeader"
import { ActivityIndicator, FlatList, View } from "react-native"
import ProductCard from "../../../components/Cards/View/ProductCard"
import { vs } from "react-native-size-matters"
import useHome from "../ViewModel/HomeScreenViewModel"
import { useEffect } from "react"
import { AppColors } from "../../../styles/colors"

// Home screen will display a list of product cards

const HomeScreen = () => {

    const { onAddToCart, fetchProducts, products, isRefreshing, handleRefresh, isLoading, handleDetail } = useHome()

    useEffect(() => {
        fetchProducts()
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} color={AppColors.primary} />
            </View>
        )
    }

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
                        onAddtoCartPress={() => onAddToCart(item)}
                        onProductDetailPress={() => handleDetail()}
                    />
                )}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: vs(10)
                }}
                contentContainerStyle={{
                    paddingHorizontal: vs(10)
                }}
                showsVerticalScrollIndicator={false}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </>
    )
}

export default HomeScreen