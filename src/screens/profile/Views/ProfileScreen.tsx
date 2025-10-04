import { View } from "react-native"
import ProfileSectionButton from "../../../components/Buttons/View/ProfileSectionButton"
import HomeHeader from "../../../components/Headers/View/HomeHeader"
import { vs, s } from "react-native-size-matters"
import { sharedPaddingHorizontal } from "../../../styles/shared-styles"
import AppText from "../../../components/texts/View/AppText"
import useProfile from "../ViewModel/ProfileViewModel"
import LangBottomSheet from "../../../components/language/LangBottomSheet"

// Profile screen having language myorders and logout buttons

const ProfileScreen = () => {

    const { onMyOrdersPress, showBottomSheet, handleLogout } = useProfile()

    return (
        <>
            <HomeHeader />
            <View style={{paddingHorizontal : sharedPaddingHorizontal}}>
                <ProfileSectionButton title="MyOrders" onPress={onMyOrdersPress}/>
                <ProfileSectionButton title="Language" onPress={showBottomSheet}/>
                <ProfileSectionButton title="Logout" onPress={handleLogout}/>
                <LangBottomSheet/>
            </View>
        </>
    )
}

export default ProfileScreen