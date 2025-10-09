import { ActivityIndicator, Alert, StyleSheet, View } from "react-native"
import { commonStyles, sharedPaddingHorizontal } from "../../../styles/shared-styles"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import { IS_Android } from "../../../constants/constants"
import AppButton from "../../../components/Buttons/View/AppButton"
import { useForm } from "react-hook-form"
import AppTextInputController from "../../../components/Inputs/View/AppTextInputController"
import { yupResolver } from "@hookform/resolvers/yup"
import useCartViewModel from "../ViewModel/CartViewModel"

// Checkout screen is used to place an order after placing the order it will reflect in the myorders screen.

const CheckoutScreen = () => {

    const { schema, onSaveOrder, isLoading } = useCartViewModel()

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(schema)
    })

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} color={AppColors.primary} />
            </View>
        )
    }

    return (
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
            <View style={styles.inputContainer}>
                <AppTextInputController control={control} name={"fullName"} placeholder="Full Name" />
                <AppTextInputController control={control} name={"phoneNumber"} placeholder="Phone Number" />
                <AppTextInputController control={control} name={"detailedAddress"} placeholder="Detailed Address" />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Confirm" onPress={handleSubmit(onSaveOrder)} />
            </View>
        </View>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    inputContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColors.white,
        marginTop: vs(15),
        paddingTop: vs(15)
    },
    buttonContainer: {
        paddingHorizontal: sharedPaddingHorizontal,
        position: "absolute",
        bottom: IS_Android ? vs(15) : 0,
        paddingTop: vs(10),
        backgroundColor: AppColors.lightGray,
        width: "100%",
        alignSelf: "center"
    }
})