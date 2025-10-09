import { StyleSheet, View } from "react-native"
import { vs, s } from "react-native-size-matters"
import AppText from "../../texts/View/AppText"
import { AppColors } from "../../../styles/colors"
import { FC } from "react"
import { shippingFees, taxes } from "../../../constants/constants"
import { TotalView } from "../Model/CartModel"

// Total view component displaying the total items Price, taxes, shipping fees and order total for a particular user
// and a continue button , by clicking on it you navigate to checkout screen and this component is visible on cart screen

const TotalViews: FC<TotalView> = ({ itemsPrice, orderTotal }) => {
    return (
        <View>
            <View style={styles.row}>
                <AppText style={styles.title}>Items Price :</AppText>
                <AppText style={styles.textPrice}>${itemsPrice}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.title}>Taxes :</AppText>
                <AppText style={styles.textPrice}>${taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText style={styles.title}>Shipping Fee :</AppText>
                <AppText style={styles.textPrice}>${shippingFees}</AppText>
            </View>
            <View style={styles.separator} />
            <View style={styles.row}>
                <AppText style={styles.title}>Order Total :</AppText>
                <AppText style={styles.textPrice}>${orderTotal}</AppText>
            </View>
        </View>
    )
}

export default TotalViews

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vs(10),
        paddingHorizontal: s(6)
    },
    title: {
        fontSize: s(16),
        flex: 1
    },
    textPrice: {
        fontSize: s(16),
        color: AppColors.primary
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: AppColors.medGray,
        marginVertical: vs(5)
    }
})