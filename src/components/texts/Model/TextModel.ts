import { StyleProp, TextProps, TextStyle } from "react-native";

export interface AppTextProps extends TextProps {
    children: React.ReactNode,
    style?: StyleProp<TextStyle>,
    variant?: "medium" | "bold"
}