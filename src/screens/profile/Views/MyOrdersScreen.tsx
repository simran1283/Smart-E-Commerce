import { FlatList } from "react-native"
import OrderItems from "../../../components/Orders/View/OrderItems"
import { useEffect } from "react"
import useProfile from "../ViewModel/ProfileViewModel"
import DateTimeHelper from "../../../helpers/DateTimeHelper"

// My orders screen displays the list of orders placed by the logged in user

const MyOrdersScreen = () => {

    const { getProducts, userOrders } = useProfile()

    useEffect(() => {
        getProducts()
    }, [])

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