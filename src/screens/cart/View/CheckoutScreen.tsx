import { StyleSheet, View } from "react-native"
import AppTextInput from "../../../components/Inputs/AppTextInput"
import { commonStyles, sharedPaddingHorizontal } from "../../../styles/shared-styles"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import { IS_Android } from "../../../constants/constants"
import AppButton from "../../../components/Buttons/AppButton"

const CheckoutScreen = () => {
    return(
        <View style={{paddingHorizontal : sharedPaddingHorizontal, flex : 1}}>
            <View style={styles.inputContainer}>
                <AppTextInput placeholder="Full Name"/>
                <AppTextInput placeholder="Phone Number"/>
                <AppTextInput placeholder="Detailed Address"/>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Confirm"/>
            </View>
        </View>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    inputContainer : {
        ...commonStyles.shadow,
        padding : s(8),
        borderRadius : s(8),
        backgroundColor : AppColors.white,
        marginTop : vs(15),
        paddingTop : vs(15)
    },
    buttonContainer : {
        paddingHorizontal : sharedPaddingHorizontal,
        position : "absolute",
        bottom : IS_Android ? vs(15) : 0,
        paddingTop : vs(10),
        backgroundColor : AppColors.lightGray,
        width : "100%",
        alignSelf : "center"
    }
})