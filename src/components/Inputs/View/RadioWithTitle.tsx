import { StyleSheet, TouchableOpacity, View } from "react-native"
import AppText from "../../texts/View/AppText"
import { vs, s } from "react-native-size-matters"
import { Radio } from "../Model/RadioModel"
import { AppColors } from "../../../styles/colors"

// Radio Button used on the Profile screen for switching between different languages

const RadioWithTitle = ({title, selected, onPress} : Radio) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.circle}>
                {selected && <View style={styles.innerCircle}/>}
            </View>
            <AppText style={styles.title}>{title}</AppText>
        </TouchableOpacity>
    )
}

export default RadioWithTitle

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : "center",
        paddingVertical : vs(5)
    },
    circle : {
        height : vs(12),
        width : vs(12),
        borderRadius : vs(6),
        borderColor :AppColors.black,
        borderWidth : 2,
        alignItems : "center",
        justifyContent : "center"
    },
    innerCircle : {
        height : s(7),
        width : s(7),
        borderRadius : s(3.5),
        backgroundColor : AppColors.black
    },
    title : {
        marginStart : s(10),
        fontSize : s(16)
    }
})