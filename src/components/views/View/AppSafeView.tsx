import { View, StyleSheet, Platform, StatusBar, ViewStyle, StyleProp } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppColors } from "../../../styles/colors"
import { FC } from "react"
import { AppSafeViewProps } from "../Model/AppSafeViewModel"



const AppSafeView : FC<AppSafeViewProps> = ({ children, style }) =>{
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={[styles.container,style]}>
                {children}
            </View>
        </SafeAreaView>
    )
        
}

export default AppSafeView

const styles = StyleSheet.create({
    safeView :{
        flex : 1,
        backgroundColor  :AppColors.white
    },
    container :{
        flex : 1
    }
})