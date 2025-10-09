import { StyleProp, TextStyle } from "react-native";


export interface AppTextInputProps {
    value: string,
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: "default" | "email-address" | "numeric";
    secureTextEntry?: boolean;
    style?: StyleProp<TextStyle>
}
