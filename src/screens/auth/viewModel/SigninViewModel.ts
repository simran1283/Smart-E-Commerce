import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import * as yup from "yup"
import { showMessage } from "react-native-flash-message";
import { setUserData } from "../../../store/reducers/userSlice";

const useSigninViewModel = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    //validations
        const schema = yup.object({
            email : yup.string()
            .required("Email is Required")
            .email("Please enter a valid email"),
    
            password : yup.string()
            .required("Password is Required")
            .min(6,"Password should contain atleast 6 characters")
        })

      type FormData = yup.InferType<typeof schema>

      //Sign in user with Firebase
    const onLoginPress = async (formData : FormData) => {

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, //instance of firebase
                formData.email,
                formData.password
            )
            const userDataObj = {
                uid : userCredential.user.uid
            }
            dispatch(setUserData(userDataObj))
            navigation.navigate("BottomTabs");

        } catch (err : any) {
            
            let errorMessage = ""

            //error handling
            if(err.code === "auth/invalid-credential"){
                errorMessage = "Invalid email or Password"
            }else if(err.code === "auth/user-not-found"){
                errorMessage = "User Not Found"
            }else{
                errorMessage = "An error occurred during sign-in"
            }

            //flash message
            showMessage({
                type : "danger",
                message : errorMessage
            })
        }
    };

    const onSignUpPress = () => {
        navigation.navigate("SignUpScreen");
    };

    return {
        onLoginPress,
        onSignUpPress,
        schema
    };
};

export default useSigninViewModel;
