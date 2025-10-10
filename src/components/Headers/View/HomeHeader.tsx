import { View, StyleSheet, Image, ViewStyle, StyleProp } from "react-native"
import { IMAGES } from "../../../constants/images-paths"
import { vs, s } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"

// Common header component that is used on every screen
const HomeHeader = ({style} : {style : StyleProp<ViewStyle>}) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.primary,
        paddingBottom: vs(10)
    },
    logo: {
        height: vs(40),
        width: s(40),
        tintColor: AppColors.white
    }
})