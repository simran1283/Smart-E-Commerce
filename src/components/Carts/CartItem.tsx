import { Image, View, StyleSheet, Pressable } from "react-native"
import AppText from "../texts/AppText"
import { vs, s } from "react-native-size-matters"
import { AppColors } from "../../styles/colors"
import { AppFonts } from "../../styles/Fonts"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { FC } from "react"

interface CartItems {
    title : string,
    price : number,
    imageURL : string,
    qty : number,
    onIncreasePress : () => void,
    onDecreasePress : () => void,
    onDeletePress : () => void
}

const CartItem : FC<CartItems> = ({
    title,
    price,
    imageURL,
    onIncreasePress,
    onDecreasePress,
    onDeletePress,
    qty
}) => {
    return (

        <View style={styles.container}>

        {/* Image container */}
            <View style={styles.ImageContainer}>
                <Image source={{ uri: imageURL }} style={styles.image} />
            </View>

         {/* Product Details container */}
            <View style={styles.DetailsContainer}>
                <AppText style={styles.textTitle}>{title}</AppText>
                <AppText style={styles.textPrice}>${price}</AppText>
                <View style={styles.qtyContainer}>
                    <Pressable style={styles.iconButton} onPress={onIncreasePress}>
                        <FontAwesome name="plus" size={s(10)} color={AppColors.primary}/>
                    </Pressable>
                    <AppText style={styles.textQty}>-1</AppText>
                    <Pressable style={styles.iconButton} onPress={onDecreasePress}>
                        <FontAwesome name="minus" size={s(10)} color={AppColors.primary}/>
                    </Pressable>
                </View>
            </View>

         {/* Delete Button Container */}
            <View style={styles.DeleteContainer}>
                <Pressable style={styles.deleteButton} onPress={onDeletePress}>
                    <AntDesign name="delete" size={s(14)} color={AppColors.red} />
                    <AppText style={styles.deleteText}>Delete</AppText>
                </Pressable>
            </View>

        </View>
    )
}

export default CartItem


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderBottomColor : AppColors.blueGray,
        borderBottomWidth : 3,
        paddingBottom : vs(4)
    },
    ImageContainer: {
        flex: 1.6,
        justifyContent: "center",
        alignItems: "center"
    },
    DetailsContainer: {
        flex: 2.5
    },
    DeleteContainer: {
        flex: 1.2,
        justifyContent : "flex-end",
        paddingEnd : s(20)
    },
    image: {
        width: s(80),
        height: vs(80),
        borderRadius: s(5)
    },
    textTitle: {
        fontSize: s(16),
        color: AppColors.primary,
        fontFamily: AppFonts.Medium,
        marginTop: vs(5)
    },
    textPrice: {
        fontSize: s(18),
        color: AppColors.primary,
        fontFamily: AppFonts.Bold,
        marginVertical: vs(5)
    },
    deleteText: {
        fontSize: s(12),
        fontFamily: AppFonts.Medium,
        color: AppColors.medGray,
        marginTop: vs(3),
        marginLeft: s(7)
    },
    deleteButton : {
        flexDirection : "row",
        alignItems : "center",
    },
    qtyContainer : {
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "row",
        borderRadius : s(30),
        borderWidth : s(1),
        borderColor : AppColors.blueGray,
        width : s(80),
        paddingHorizontal : s(5),
        paddingVertical : s(5)
    },
    iconButton : {
        justifyContent : "center",
        alignItems : "center",
        height : s(20),
        width : s(20),
        padding : s(5),
        backgroundColor : AppColors.lightGray,
        borderRadius : s(10)
    },
    textQty : {
        flex : 1,
        alignItems : "center",
        color : AppColors.primary,
        paddingLeft : s(4)
    }
})