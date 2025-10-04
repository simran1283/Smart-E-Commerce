import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/home/View/HomeScreen"
import CartScreen from "../screens/cart/View/CartScreen"
import ProfileScreen from "../screens/profile/Views/ProfileScreen"
import { AppColors } from "../styles/colors"
import { vs, s } from "react-native-size-matters"
import { IS_Android } from "../constants/constants"
import Ionicons from '@expo/vector-icons/Ionicons';

// Bottom Tabs navigation that will be visible once user logged in to the app 
// for switching between home, cart, and profile screens

const BottomTabs = () =>{

    const Tabs =  createBottomTabNavigator()
    return(
        <Tabs.Navigator 
        screenOptions={{
            headerShown : false,
            tabBarActiveTintColor : AppColors.primary,
            tabBarLabelStyle:{
                marginTop : vs(4),
                fontSize : s(12)
            },
            tabBarStyle : {
                height : vs(50)
            }
        }}>
            <Tabs.Screen name="HomeScreen" component={HomeScreen}
            options={{
                tabBarIcon : ({color,size})=>(
                    <Ionicons name="home" color={color} size={size}/>
                ),
                title : "Home"
            }}/>
            <Tabs.Screen name="CartScreen" component={CartScreen}
            options={{
                tabBarIcon : ({color,size})=>(
                    <Ionicons name="cart" color={color} size={size}/>
                ),
                title : "Cart"
            }}/>
            <Tabs.Screen name="ProfileScreen" component={ProfileScreen}
            options={{
                tabBarIcon : ({color,size})=>(
                    <Ionicons name="person" color={color} size={size}/>
                ),
                title : "Profile"
            }}/>
        </Tabs.Navigator>
    )
}

export default BottomTabs