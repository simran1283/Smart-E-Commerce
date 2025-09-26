import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import AppText from "../texts/AppText"
import { AppColors } from "../../styles/colors"
import { s, vs } from "react-native-size-matters"
import { FC } from "react"

interface AppButtonProps {
    onPress : ()=> void,
    title : string,
    backgroundColor?: string,
    textColor?: string,
    style?: StyleProp<ViewStyle>,
    styleTitle?: StyleProp<TextStyle>,
    disabled?: boolean
}


const AppButton : FC<AppButtonProps> = ({ onPress, title, backgroundColor = AppColors.primary, textColor = AppColors.white, style, styleTitle, disabled = false }) => {
    return (
        <TouchableOpacity onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.button,
                { backgroundColor: disabled ? AppColors.disabledGray : backgroundColor },
                style
            ]}
            disabled={disabled}>
            <AppText variant="bold"
                style={[
                    styles.textTitle,
                    { color: textColor },
                    styleTitle
                ]}>{title}</AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({

    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: vs(40),
        borderRadius: s(25)
    },
    textTitle: {
        fontSize: s(16)
    }
})