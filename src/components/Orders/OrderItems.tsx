import { StyleSheet, View } from "react-native"
import AppText from "../texts/AppText"
import { commonStyles, sharedPaddingHorizontal } from "../../styles/shared-styles"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../styles/colors"
import { AppFonts } from "../../styles/Fonts"
import { FC } from "react"

interface OrderItems {
    totalPrice : string,
    totalAmount : number,
    date : string
}

const OrderItems : FC<OrderItems> = ({totalPrice, totalAmount, date}) => {
    return(
        <View style={styles.container}>
            <AppText variant="bold">Order Details</AppText>
            <View style={styles.separator}/>
            <View style={styles.orderDetailContainer}>
                <AppText style={styles.textTitle}>Total Price : {totalPrice}</AppText>
                <AppText style={styles.textSubtitle}>{totalAmount} $</AppText>
            </View>
             <View style={styles.orderDetailContainer}>
                <AppText style={styles.textTitle}>Date : {date}</AppText>
                <AppText style={styles.textSubtitle}>{date}</AppText>
            </View>
        </View>
    )
}

export default OrderItems


const styles = StyleSheet.create({
    container : {
        ...commonStyles.shadow,
        backgroundColor : AppColors.white,
        paddingHorizontal : sharedPaddingHorizontal,
        marginTop : s(12),
        marginHorizontal : s(10),
        borderRadius : s(10),
        paddingVertical : vs(8)
    },
    separator : {
        borderBottomColor : AppColors.medGray,
        borderBottomWidth : 1
    },
    orderDetailContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginTop : vs(5)
    },
    textTitle : {
        fontSize : s(16),
        fontFamily : AppFonts.Medium,
        color : AppColors.primary
    },
    textSubtitle : {
         fontSize : s(16),
        fontFamily : AppFonts.Bold,
        color : AppColors.red
    }
})