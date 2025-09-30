import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface AppButtonProps {
    onPress : ()=> void,
    title : string,
    backgroundColor?: string,
    textColor?: string,
    style?: StyleProp<ViewStyle>,
    styleTitle?: StyleProp<TextStyle>,
    disabled?: boolean
}


export interface ProfileButton {
    onPress? : () => void, 
    title : string
}