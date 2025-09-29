import HomeHeader from "../../../components/Headers/HomeHeader"
import { FlatList } from "react-native"
import ProductCard from "../../../components/Cards/ProductCard"
import { products } from "../../../data/products"
import { vs } from "react-native-size-matters"


const HomeScreen = () => {
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
                        onAddtoCartPress={() => { }}
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