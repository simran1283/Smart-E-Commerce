import { Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../../styles/shared-styles";
import AppTextInput from "../../../components/Inputs/View/AppTextInput";
import AppText from "../../../components/texts/View/AppText";
import AppButton from "../../../components/Buttons/View/AppButton";
import { AppColors } from "../../../styles/colors";
import useSigninViewModel from "../viewModel/SigninViewModel";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppTextInputController from "../../../components/Inputs/View/AppTextInputController";


const SigninScreen = () => {
    const {
        onLoginPress,
        onSignUpPress
    } = useSigninViewModel();

    
    const schema = yup.object({
        email : yup.string()
        .required("Email is Required")
        .email("Please enter a valid email"),

        password : yup.string()
        .required("Password is Required")
        .min(6,"Password should contain atleast 6 characters")
    })


    const { handleSubmit, control } = useForm({
        resolver : yupResolver(schema)
    })


    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInputController control={control} placeholder="Email" name={"email"}/>
            <AppTextInputController control={control} placeholder="Password" name={"password"} secureTextEntry />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title="Login" onPress={handleSubmit(onLoginPress)} />
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
