import { Text, StyleSheet } from "react-native"
import { s } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import { AppFonts } from "../../../styles/Fonts"
import { AppTextProps } from "../Model/TextModel"

// App Text Component so that text will be consistent on whole App

const AppText: React.FC<AppTextProps> = ({ children, style, variant = "medium", ...rest }) => {

    return (

        <Text {...rest} style={[styles[variant], style]}>
            {children}
        </Text>

    )
}

export default AppText;

const styles = StyleSheet.create({
    bold: {
        fontSize: s(18),
        color: AppColors.black,
        fontFamily: AppFonts.Bold
    },
    medium: {
        fontSize: s(16),
        color: AppColors.black,
        fontFamily: AppFonts.Medium
    }
})