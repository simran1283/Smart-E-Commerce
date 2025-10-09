import { View, Image, StyleSheet, ActivityIndicator } from "react-native"
import { IMAGES } from "../../../constants/images-paths"
import AppText from "../../../components/texts/View/AppText"
import { vs } from "react-native-size-matters"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { AppColors } from "../../../styles/colors"
import useProfile from "../ViewModel/ProfileViewModel"
import { useEffect, useState } from "react"


const UserProfile = () => {

    const { totalOrders, getTotalDocs} = useProfile()

    const [isLoading,setIsLoading] = useState(false)

    const userData = useSelector((state : RootState) => state.userSlice.userData)
    const userEmail = userData?.email
    const userName = userEmail.split("@")[0].toUpperCase()

    useEffect(()=>{
        const getTotalOrders = async() => {
            setIsLoading(true)
            await getTotalDocs()
            setIsLoading(false)
        }
        getTotalOrders()
    },[])

    if(isLoading){
        return(
            <View style={{flex : 1, alignItems : "center", justifyContent : "center"}}>
                <ActivityIndicator size={"large"} color={AppColors.primary}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Image source={IMAGES.userProfile} style={styles.image}/>
            <AppText variant="bold" style={styles.title}>{userName}</AppText>
            <AppText variant="bold" style={styles.subtitle}>{userEmail}</AppText>
            <AppText>You Have Placed {totalOrders} Orders</AppText>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-start",
        marginVertical : vs(30)
    },
    image : {
        height : vs(120),
        width : vs(120),
        borderRadius : vs(60)
    },
    title : {
        fontSize : vs(20),
        margin : vs(10)
    },
    subtitle : {
        color : AppColors.medGray,
        marginBottom : vs(5)
    }
})