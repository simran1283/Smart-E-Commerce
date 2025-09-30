import { StyleSheet, View } from "react-native"
import AppText from "../../../components/texts/View/AppText"
import { vs, s } from "react-native-size-matters"
import { AppFonts } from "../../../styles/Fonts"
import { AppColors } from "../../../styles/colors"
import AppButton from "../../../components/Buttons/View/AppButton"
import useCartViewModel from "../ViewModel/CartViewModel"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const EmptyCart = () => {
    const { onStartPress } = useCartViewModel()
    return (
        <View style={styles.cartContainer}>
            <MaterialCommunityIcons
                name="shopping-outline"
                size={s(100)}
                color={AppColors.primary}
                style={styles.icon} />
            <AppText style={styles.Title}>Your Cart Is Empty</AppText>
            <AppText style={styles.subTitle}>Browse Our Collections and Find Something You Like.</AppText>
            <AppButton title="Start Shopping" style={styles.button} onPress={onStartPress}></AppButton>
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: vs(20)
    },
    Title: {
        fontSize: s(16),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary,
        paddingBottom: vs(10)
    },
    subTitle: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.medGray,
        paddingBottom: vs(10),
        textAlign: "center"
    },
    button: {
        width: "80%"
    },
    icon: {
        marginBottom: vs(20),
        opacity: .9
    }
})