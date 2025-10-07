import { StyleSheet, View } from "react-native"
import AppText from "../../texts/View/AppText"
import { commonStyles, sharedPaddingHorizontal } from "../../../styles/shared-styles"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import { AppFonts } from "../../../styles/Fonts"
import { FC } from "react"
import { OrderItem } from "../Model/OrderItemModel"

// Order Item component that will display the order details like order date, order total in myorders on profile screen

const OrderItems: FC<OrderItem> = ({ totalItemsPrice, orderTotal, date }) => {
    return (
        <View style={styles.container}>
            <AppText variant="bold">Order Details</AppText>
            <View style={styles.separator} />
            <View style={styles.orderDetailContainer}>
                <AppText style={styles.textTitle}>Total Price : {totalItemsPrice}</AppText>
                <AppText style={styles.textSubtitle}>{orderTotal} $</AppText>
            </View>
            <View style={styles.orderDetailContainer}>
                <AppText style={styles.textTitle}>Date : {date}</AppText>
            </View>
        </View>
    )
}

export default OrderItems


const styles = StyleSheet.create({
    container: {
        ...commonStyles.shadow,
        backgroundColor: AppColors.white,
        paddingHorizontal: sharedPaddingHorizontal,
        marginTop: s(12),
        marginHorizontal: s(10),
        borderRadius: s(10),
        paddingVertical: vs(8),
        marginBottom : vs(10)
    },
    separator: {
        borderBottomColor: AppColors.medGray,
        borderBottomWidth: 1
    },
    orderDetailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: vs(5)
    },
    textTitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary
    },
    textSubtitle: {
        fontSize: s(16),
        fontFamily: AppFonts.Bold,
        color: AppColors.red
    }
})