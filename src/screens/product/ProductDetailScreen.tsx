import { StyleSheet, TouchableOpacity, View } from "react-native"
import HomeHeader from "../../components/Headers/View/HomeHeader"
import ProductDetail from "../../components/Products/ProductDetail"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";


const ProductDetailScreen = () => {

    const navigation = useNavigation()
    
    return (
        <>
            <HomeHeader style={{position : "relative"}}/>
            <TouchableOpacity style={styles.iconView} onPress={()=> navigation.goBack()}>
                <FontAwesome6 name="arrow-left" size={24} color="white"/>
            </TouchableOpacity>
            <ProductDetail />
        </>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    iconView: {
        position : "absolute",
        top : vs(15),
        left : 10
    }
})