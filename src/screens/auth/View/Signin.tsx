import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../../styles/shared-styles";
import AppTextInput from "../../../components/Inputs/View/AppTextInput";
import AppText from "../../../components/texts/View/AppText";
import AppButton from "../../../components/Buttons/View/AppButton";
import { AppColors } from "../../../styles/colors";
import useSigninViewModel from "../viewModel/SigninViewModel";

const SigninScreen = () => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        onLoginPress,
        onSignUpPress
    } = useSigninViewModel();

    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title="Login" onPress={onLoginPress} />
            <AppButton
                title="Sign Up"
                style={styles.registerButton}
                textColor={AppColors.primary}
                onPress={onSignUpPress}
            />
        </View>
    );
};

export default SigninScreen;

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
    registerButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.primary,
        borderWidth: 1,
        marginTop: vs(15)
    }
});
