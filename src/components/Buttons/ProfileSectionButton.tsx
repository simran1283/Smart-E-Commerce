import { TouchableOpacity, View, StyleSheet } from "react-native"
import AppText from "../texts/AppText"
import { AppColors } from "../../styles/colors"
import { vs, s } from "react-native-size-matters"
import { AppFonts } from "../../styles/Fonts"
import { MaterialIcons } from "@expo/vector-icons"

const ProfileSectionButton = ({ onPress, title } : {onPress? : () => void, title : string}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.textContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
            </View>
            <View>
                 <MaterialIcons name="arrow-forward-ios" size={s(16)} color={AppColors.medGray}/>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileSectionButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderBottomColor: AppColors.lightGray,
        paddingBottom: vs(10),
        marginTop: vs(14),
        flexDirection: "row",
        borderBottomWidth : 1
    },
    textTitle: {
        fontSize: s(14),
        color: AppColors.primary,
        fontFamily: AppFonts.Medium
    },
    textContainer : {
        flex : 5,
        marginHorizontal : s(8),
        alignItems : "flex-start",
        justifyContent : "flex-start"
    }
})