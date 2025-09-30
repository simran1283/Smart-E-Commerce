import{ View, StyleSheet, Image } from "react-native"
import { IMAGES } from "../../../constants/images-paths"
import { vs, s } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
const HomeHeader = () =>{
    return(
        <View style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo}/>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet .create({
    container :{
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : AppColors.primary,
        paddingBottom : vs(10)
    },
    logo :{ 
        height : vs(40),
        width : s(40),
        tintColor : AppColors.white
    }
})