import { Alert, Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../../styles/shared-styles";
import AppTextInput from "../../../components/Inputs/View/AppTextInput";
import AppText from "../../../components/texts/View/AppText";
import AppButton from "../../../components/Buttons/View/AppButton";
import { AppColors } from "../../../styles/colors";
import useSignUpViewModel from "../viewModel/SignupViewModel";

const SignUpScreen = () => {
    const {
        userName,
        email,
        password,
        setUserName,
        setEmail,
        setPassword,
        onGoToSignInPress
    } = useSignUpViewModel();

    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInput placeholder="UserName" value={userName} onChangeText={setUserName} />
            <AppTextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <AppTextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title="Create New Account" onPress={() => Alert.alert("Account Created")} />
            <AppButton
                title="Go to Sign In"
                style={styles.signInButton}
                textColor={AppColors.primary}
                onPress={onGoToSignInPress}
            />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal
    },
    appLogo: {
        height: vs(150),
        width: s(150),
        marginBottom: vs(30),
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15),
    },
    signInButton: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.primary,
        borderWidth: 1,
        marginTop: vs(15),
    },
});
