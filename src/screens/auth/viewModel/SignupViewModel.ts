import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const useSignUpViewModel = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();


    const onGoToSignInPress = () => {
        navigation.navigate("SignInScreen");
    };

    const onCreateAccountPress = () => {
        Alert.alert("Account Created")
        navigation.navigate("BottomTabs")
    }

    return {
        userName,
        email,
        password,
        setUserName,
        setEmail,
        setPassword,
        onGoToSignInPress,
        onCreateAccountPress
    };
};

export default useSignUpViewModel;
