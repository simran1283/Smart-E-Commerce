import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const useSignUpViewModel = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();


    const onGoToSignInPress = () => {
        navigation.navigate("SignInScreen");
    };

    return {
        userName,
        email,
        password,
        setUserName,
        setEmail,
        setPassword,
        onGoToSignInPress,
    };
};

export default useSignUpViewModel;
