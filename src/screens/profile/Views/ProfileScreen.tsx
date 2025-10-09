import { View } from "react-native"
import ProfileSectionButton from "../../../components/Buttons/View/ProfileSectionButton"
import HomeHeader from "../../../components/Headers/View/HomeHeader"
import { sharedPaddingHorizontal } from "../../../styles/shared-styles"
import useProfile from "../ViewModel/ProfileViewModel"
import LangBottomSheet from "../../../components/language/LangBottomSheet"

// Profile screen having language myorders and logout buttons

const ProfileScreen = () => {

    const { onMyOrdersPress, showBottomSheet, handleLogout, handleUserProfile } = useProfile()

    return (
        <>
            <HomeHeader />
            <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
                <ProfileSectionButton title="MyOrders" onPress={onMyOrdersPress} />
                <ProfileSectionButton title="Language" onPress={showBottomSheet} />
                <ProfileSectionButton title="Your Profile" onPress={handleUserProfile} />
                <ProfileSectionButton title="Logout" onPress={handleLogout} />
                <LangBottomSheet />
            </View>
        </>
    )
}

export default ProfileScreen