import AppSafeView from "../../components/views/AppSafeView"
import { Image, StyleSheet } from "react-native"
import { IMAGES } from "../../constants/images-paths"
import { vs, s } from "react-native-size-matters"
import { sharedPaddingHorizontal } from "../../styles/shared-styles"
import AppTextInput from "../../components/Inputs/AppTextInput"
import AppText from "../../components/texts/AppText"
import { useState } from "react"
import AppButton from "../../components/Buttons/AppButton"
import { AppColors } from "../../styles/colors"
import { useNavigation } from "@react-navigation/native"


const SignUpScreen = () => {

    const [userName, setUserName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInput placeholder="UserName" value={userName} onChangeText={setUserName} />
            <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title="Create New Account" />
            <AppButton title="Go to Sign In" style={styles.signInButton} textColor={AppColors.primary} 
            onPress={()=> navigation.navigate("SignInScreen")}/>
        </AppSafeView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal
    },
    appLogo: {
        height: vs(150),
        width: s(150),
        marginBottom: vs(30)
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15)
    },
    signInButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.primary,
        borderWidth: 1,
        marginTop: vs(15)
    }
})