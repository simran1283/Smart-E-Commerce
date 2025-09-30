import { FlatList } from "react-native"
import OrderItems from "../../../components/Orders/View/OrderItems"
import { orders } from "../../../data/orders"



const MyOrdersScreen = () => {
    return(
        <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <OrderItems {...item}/>}
        />
    )
}

export default MyOrdersScreen