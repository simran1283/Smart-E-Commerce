import { View, StyleSheet, Platform, StatusBar, ViewStyle, StyleProp } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppColors } from "../../styles/colors"
import { ReactNode, FC } from "react"
import { IS_Android } from "../../constants/constants"

interface AppSafeViewProps {
    children : ReactNode,
    style?: StyleProp<ViewStyle>
}


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
        backgroundColor  :AppColors.white,
        padding : IS_Android ? StatusBar.currentHeight || 0 : 0
    },
    container :{
        flex : 1
    }
})