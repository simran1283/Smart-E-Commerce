import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import * as yup from "yup"
import { auth } from "../../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../store/reducers/userSlice";


const useSignUpViewModel = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    //validations
    const schema = yup.object({
        userName: yup.string()
            .required("User Name is Required")
            .min(3, "User Name must have atleast 3 characters"),

        email: yup.string()
            .required("Email is Required")
            .email("Please enter a valid email"),

        password: yup.string()
            .required("Password is Required")
            .min(6, "Password must be 6 characters long")
    })

    type FormData = yup.InferType<typeof schema>

    //create user with firebase
    const onGoToSignInPress = () => {
        navigation.navigate("SignInScreen");
    };

    const onCreateAccountPress = async (formData: FormData) => {

        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            Alert.alert("Account Created")
            navigation.navigate("BottomTabs")

            const userDataObj = {
                uid: userCredential.user.uid,
                email: userCredential.user.email
            }
            dispatch(setUserData(userDataObj))
        }
        catch (err: any) {

            let errorMessage = ""

            if (err.code === "auth/email-already-in-use") {
                errorMessage = "This email is already in use"
            } else if (err.code === "auth/invalid-email") {
                errorMessage = "Invalid Email ! "
            } else if (err.code === "auth/weak-password") {
                errorMessage = "This Password is too weak ! "
            } else {
                errorMessage = "Ann error occurred during sign-up"
            }

            showMessage({
                type: "danger",
                message: errorMessage
            })
        }

    }

    return {
        onGoToSignInPress,
        onCreateAccountPress,
        schema
    };
};

export default useSignUpViewModel;
