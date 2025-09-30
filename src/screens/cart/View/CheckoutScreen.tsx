import { Alert, StyleSheet, View } from "react-native"
import { commonStyles, sharedPaddingHorizontal } from "../../../styles/shared-styles"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import { IS_Android } from "../../../constants/constants"
import AppButton from "../../../components/Buttons/View/AppButton"
import { useForm } from "react-hook-form"
import AppTextInputController from "../../../components/Inputs/View/AppTextInputController"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"


const CheckoutScreen = () => {


    const schema = yup.object({
        fullName: yup
            .string()
            .required("Name is Required")
            .min(3, "Name must be atleast 3 characters"),

        phoneNumber: yup.string()
            .required("Phone Number is Required")
            .matches(/^[0-9]+/, "Phone Number should contain only numbers")
            .min(10, "Phone Number must be atleast 10 characters"),

        detailedAddress: yup.string()
            .required("Address is required")
    })

    type FormData = yup.InferType<typeof schema>

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(schema)
    })

    const onSaveOrder = (formData : FormData) => {
        Alert.alert(JSON.stringify(formData))
        console.log(formData)
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