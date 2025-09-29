import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const useSigninViewModel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const onLoginPress = () => {
        navigation.navigate("BottomTabs");
    };

    const onSignUpPress = () => {
        navigation.navigate("SignUpScreen");
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        onLoginPress,
        onSignUpPress
    };
};

export default useSigninViewModel;
