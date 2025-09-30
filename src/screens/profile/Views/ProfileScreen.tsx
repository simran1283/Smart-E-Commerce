import { View } from "react-native"
import ProfileSectionButton from "../../../components/Buttons/View/ProfileSectionButton"
import HomeHeader from "../../../components/Headers/View/HomeHeader"
import { vs, s } from "react-native-size-matters"
import { sharedPaddingHorizontal } from "../../../styles/shared-styles"
import AppText from "../../../components/texts/View/AppText"
import useProfile from "../ViewModel/ProfileViewModel"

const ProfileScreen = () => {

    const { onMyOrdersPress } = useProfile()

    return (
        <>
            <HomeHeader />
            <AppText variant="bold" style={{fontSize : s(18), marginTop : vs(10), paddingHorizontal : sharedPaddingHorizontal}}>Hello, Simran</AppText>
            <View style={{paddingHorizontal : sharedPaddingHorizontal}}>
                <ProfileSectionButton title="MyOrders" onPress={onMyOrdersPress}/>
                <ProfileSectionButton title="Language" />
                <ProfileSectionButton title="Logout" />
            </View>
        </>
    )
}

export default ProfileScreen