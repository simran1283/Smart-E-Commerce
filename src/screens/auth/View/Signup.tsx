import { Alert, Image, StyleSheet, View } from "react-native";
import { IMAGES } from "../../../constants/images-paths";
import { vs, s } from "react-native-size-matters";
import { sharedPaddingHorizontal } from "../../../styles/shared-styles";
import AppTextInput from "../../../components/Inputs/View/AppTextInput";
import AppText from "../../../components/texts/View/AppText";
import AppButton from "../../../components/Buttons/View/AppButton";
import { AppColors } from "../../../styles/colors";
import useSignUpViewModel from "../viewModel/SignupViewModel";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppTextInputController from "../../../components/Inputs/View/AppTextInputController";

const SignUpScreen = () => {
    const {
        onGoToSignInPress,
        onCreateAccountPress
    } = useSignUpViewModel();

    const schema = yup.object({
        userName : yup.string()
        .required("User Name is Required")
        .min(3,"User Name must have atleast 3 characters"),

        email : yup.string()
        .required("Email is Required")
        .email("Please enter a valid email"),

        password : yup.string()
        .required("Password is Required")
        .min(6,"Password must be 6 characters long")
    })

    const { control, handleSubmit } = useForm({
        resolver : yupResolver(schema)
    })

    return (
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInputController control={control} name={"userName"} placeholder="UserName" />
            <AppTextInputController control={control} name={"email"} placeholder="Email" />
            <AppTextInputController control={control} name={"password"} placeholder="Password" secureTextEntry />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title="Create New Account" onPress={handleSubmit(onCreateAccountPress)} />
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
