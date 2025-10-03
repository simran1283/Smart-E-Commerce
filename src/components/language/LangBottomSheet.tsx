import ActionSheet from "react-native-actions-sheet"
import AppText from "../texts/View/AppText"
import { StyleSheet, View } from "react-native"
import AppButton from "../Buttons/View/AppButton"
import { vs,s } from "react-native-size-matters"
import RadioWithTitle from "../Inputs/View/RadioWithTitle"

const LangBottomSheet = () => {
    return(
        <ActionSheet id="LANG_SHEET">
            <View style={styles.container}>
                <AppText style={styles.title}>Change Language</AppText>
                <RadioWithTitle title={"English"} selected={true}/>
                <AppButton title="Confirm" onPress={() => {}}></AppButton>
            </View>
        </ActionSheet>
    )
}

export default LangBottomSheet;

const styles = StyleSheet.create({
    container : {
        padding : s(16)
    },
    title : {
        marginBottom : vs(10),
        textAlign : "center"
    }
})