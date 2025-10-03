import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../../styles/colors"
import AppText from "../../texts/View/AppText"
import { AppFonts } from "../../../styles/Fonts"
import { Ionicons } from "@expo/vector-icons"
import { commonStyles } from "../../../styles/shared-styles"
import { FC } from "react"
import { ProductCardType } from "../Model/CardModel"


const ProductCard : FC<ProductCardType> = ({onAddtoCartPress, title, price, ImageURL}) => {
    return (
        <View style={styles.container}>

            {/* Add to cart button */}
            <TouchableOpacity style={styles.addtoCartBttn} onPress={onAddtoCartPress}>
                <Ionicons name="cart" size={s(15)} color={AppColors.white} />
            </TouchableOpacity>

            {/* Image container */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri : ImageURL}}/>
            </View>

            {/* Details container */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText}>{title}</AppText>
                <AppText style={styles.priceText}>$ {price}</AppText>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        height: vs(190),
        width: s(160),
        borderRadius: vs(10),
        backgroundColor: AppColors.white, 
        marginTop : vs(5),
        ...commonStyles.shadow
    },
    imageContainer: {
        overflow: "hidden",
        borderTopLeftRadius: vs(10),
        borderTopRightRadius: vs(10),
        height: vs(130),
        width: "100%"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    detailsContainer: {
        flex: 1,
        paddingTop: s(8),
        paddingBottom: vs(15),
        paddingHorizontal: s(10)
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary
    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary,
        marginTop: vs(7)
    },
    addtoCartBttn: {
        height: s(26),
        width: s(26),
        position: "absolute",
        top: 5,
        left: 5,
        borderRadius: s(13),
        backgroundColor: AppColors.primary,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})