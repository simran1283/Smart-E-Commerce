import { Text, StyleSheet, TextStyle, TextProps, StyleProp } from "react-native"
import { s } from "react-native-size-matters"
import { AppColors } from "../../styles/colors"

interface AppTextProps extends TextProps {
    children: React.ReactNode,
    style?: StyleProp<TextStyle>,
    variant?: "medium" | "bold"
}

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
        color: AppColors.black
    },
    medium: {
        fontSize: s(16),
        color: AppColors.black
    }
})