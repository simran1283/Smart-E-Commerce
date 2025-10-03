import { FlatList } from "react-native"
import CartItem from "../../../components/Carts/Views/CartItem"
import TotalViews from "../../../components/Carts/Views/TotalViews"
import HomeHeader from "../../../components/Headers/View/HomeHeader"
import EmptyCart from "./EmptyCart"
import AppButton from "../../../components/Buttons/View/AppButton"
import useCartViewModel from "../ViewModel/CartViewModel"
import { vs } from "react-native-size-matters"

const CartScreen = () => {

    const { onContinuePress, onDecreasePress, onDeletePress, onIncreasePress, items, totalItemsPrice, orderTotal } = useCartViewModel()

    return (
        <>
            <HomeHeader />
            {items.length > 0 ? (

                <>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <CartItem {...item} price={item.sum}
                                onDecreasePress={() => onDecreasePress(item)}
                                onIncreasePress={() => onIncreasePress(item)}
                                onDeletePress={() => onDeletePress(item)}
                            />}
                        showsVerticalScrollIndicator={false} />
                    <TotalViews itemsPrice={totalItemsPrice} orderTotal={orderTotal} />
                    <AppButton title="Continue" onPress={onContinuePress} style={{marginBottom : vs(10), width : "90%"}}/>
                </>

            ) : (

                <EmptyCart />

            )}


        </>

    )
}

export default CartScreen;
