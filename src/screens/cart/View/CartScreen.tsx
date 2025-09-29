import { FlatList } from "react-native"
import CartItem from "../../../components/Carts/CartItem"
import TotalViews from "../../../components/Carts/TotalViews"
import HomeHeader from "../../../components/Headers/HomeHeader"
import EmptyCart from "./EmptyCart"
import { products } from "../../../data/products"
import AppButton from "../../../components/Buttons/AppButton"
import { useNavigation } from "@react-navigation/native"


const CartScreen = () => {

    const navigation = useNavigation()

    return (
        <>
            <HomeHeader />
            {/* <EmptyCart/> */}

            <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>{ return <CartItem {...item}/>}}
            showsVerticalScrollIndicator = {false}/>
            <TotalViews itemsPrice={5000} orderTotal={5026}/>
            <AppButton title="Continue" onPress={()=> navigation.navigate("CheckoutScreen")}/>
        </>

    )
}

export default CartScreen;
