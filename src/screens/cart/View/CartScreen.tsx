import { FlatList } from "react-native"
import CartItem from "../../../components/Carts/CartItem"
import TotalViews from "../../../components/Carts/TotalViews"
import HomeHeader from "../../../components/Headers/HomeHeader"
import EmptyCart from "./EmptyCart"
import { products } from "../../../data/products"
import AppButton from "../../../components/Buttons/AppButton"
import { useNavigation } from "@react-navigation/native"
import useCartViewModel from "../ViewModel/CartViewModel"

const CartScreen = () => {

const { onContinuePress } = useCartViewModel()

    return (
        <>
            <HomeHeader />
            {/* <EmptyCart/> */}

            <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>  <CartItem {...item}/>}
            showsVerticalScrollIndicator = {false}/>
            <TotalViews itemsPrice={5000} orderTotal={5026}/>
            <AppButton title="Continue" onPress={onContinuePress}/>
        </>

    )
}

export default CartScreen;
