import { ActivityIndicator, FlatList, View } from "react-native"
import OrderItems from "../../../components/Orders/View/OrderItems"
import { useEffect } from "react"
import useProfile from "../ViewModel/ProfileViewModel"
import DateTimeHelper from "../../../helpers/DateTimeHelper"
import { AppColors } from "../../../styles/colors"

// My orders screen displays the list of orders placed by the logged in user

const MyOrdersScreen = () => {

    const { getProducts, userOrders, isLoading } = useProfile()

    useEffect(() => {
        getProducts()
    }, [])

    if (isLoading) {
        return (
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <ActivityIndicator size={"large"} color={AppColors.primary} />
            </View>
        )
    }

    return (
        <FlatList
            data={userOrders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OrderItems
                totalItemsPrice={item.totalItemsPrice}
                orderTotal={item.orderTotal}
                date={DateTimeHelper(item.createdAt)}
            />}
        />
    )
}

export default MyOrdersScreen