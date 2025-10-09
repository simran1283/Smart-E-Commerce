import { View, Image, StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AppText from "../texts/View/AppText"
import { vs, s } from "react-native-size-matters";
import { IMAGES } from "../../constants/images-paths";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { AppColors } from "../../styles/colors";
import AppButton from "../Buttons/View/AppButton";
import ProductCarousel from "./ProductCarousel";



const ProductDetail = () => {
    return (
        //parent container
        <ScrollView style={{ backgroundColor: AppColors.lightGray, flex: 1 }} showsVerticalScrollIndicator={false}>
            <ProductCarousel/>

            {/* outer container */}
            <View style={styles.container}>

                {/* product image */}
                {/* <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={styles.image} /> */}
                

                {/* product info container */}
                <View style={styles.innerContainer}>

                    {/* information container */}
                    <View style={styles.info}>
                        <AppText variant="bold" style={{ fontSize: vs(13) }}>iPhone 15 Pro Max</AppText>
                        <AppText style={{ color: AppColors.medGray, fontSize: vs(12), textAlign: "left" }}>Lorem ipsum dolor sit amet consec tetur adipisicing elit consec tetur.Facilis iure ex.</AppText>

                        {/* rating container */}
                        <View style={styles.ratingContainer}>
                            <MaterialIcons name="star-rate" size={24} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={24} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={24} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={24} color="#f6d949ff" />
                            <EvilIcons name="star" size={24} color={AppColors.medGray} />
                            <AppText style={styles.rateText}>4 Ratings</AppText>
                        </View>

                        {/* price container */}
                        <View style={styles.priceContainer}>
                            <AppText style={{ fontSize: vs(16), marginEnd: vs(8), color: "#1350b1ff" }}>$ 172</AppText>
                            <AppText style={{
                                fontSize: vs(12), textDecorationStyle: "solid",
                                textDecorationLine: "line-through", marginEnd: vs(8), color: AppColors.medGray
                            }}>($ 250.00)</AppText>
                            <AppText style={{ fontSize: vs(11), color: "#1350b1ff" }}>(30% Off)</AppText>
                        </View>

                    </View>

                    {/* icons container */}
                    <View style={styles.iconsContainer}>

                        {/* wishlist and share button */}
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="heart-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon}>
                            <Ionicons name="share-social-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Product Size container */}
            <View style={{ backgroundColor: AppColors.white, marginTop: vs(12), paddingTop: vs(5), paddingHorizontal: vs(10) }}>
                <AppText variant="bold" style={{ fontSize: vs(13) }}>Select Size</AppText>
                <View style={styles.sizeContainer}>
                    <TouchableOpacity style={styles.size}>
                        <View style={styles.innerSize}><AppText style={{ color: AppColors.white }}>XS</AppText></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.size}><AppText>S</AppText></TouchableOpacity>
                    <TouchableOpacity style={styles.size}><AppText>M</AppText></TouchableOpacity>
                    <TouchableOpacity style={styles.size}><AppText>L</AppText></TouchableOpacity>
                    <TouchableOpacity style={styles.size}><AppText>XL</AppText></TouchableOpacity>
                </View>
            </View>

            {/* Add to cart button */}
            <AppButton title="ADD TO CART" onPress={() => { }} style={{ width: "50%", backgroundColor: "#1350b1ff", marginVertical: vs(10) }}></AppButton>

            {/* Product description */}
            <View style={styles.description}>
                <AppText variant="bold" style={{ fontSize: vs(14) }}>Product Description</AppText>
                <AppText style={{ fontSize: vs(11), color: AppColors.medGray, textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae soluta quos eum praesentium ne.Beatae soluta quos eum.Lorem ipsum dolor sit amet consectetur adipisicing elit.</AppText>
            </View>

            {/* Rating and reviews */}
            <View style={styles.reviewContainer}>

                {/* inner container */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <AppText variant="bold" style={{ fontSize: vs(14) }}>Rating and Reviews</AppText>
                    <TouchableOpacity><AppText style={{ color: "#1350b1ff", fontSize: vs(11) }}>SHOW LESS</AppText></TouchableOpacity>
                </View>

                {/* separator */}
                <View style={{ width: "100%", height: vs(1), backgroundColor: AppColors.medGray, marginTop: vs(5) }}></View>

                {/* review 1 */}
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: vs(11) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: vs(10) }}>
                            <Image style={{ height: vs(30), width: vs(30), borderRadius: vs(15), borderColor: AppColors.medGray, borderWidth: vs(1) }} />
                            <View>
                                <AppText style={{ fontSize: vs(11) }} variant="bold">Serina Williams</AppText>
                                <AppText style={{ fontSize: vs(8) }}>1 Oct, 2025</AppText>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <EvilIcons name="star" size={18} color={AppColors.medGray} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: vs(11) }}>
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                    </View>
                    <AppText style={{ color: AppColors.primary, fontSize: vs(11), marginTop: vs(2) }}>Greatest Purchase I have ever made in my life!</AppText>
                </View>

                {/* separator */}
                <View style={{ width: "100%", height: vs(1), backgroundColor: AppColors.medGray, marginTop: vs(10) }}></View>

                {/* review 2 */}
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: vs(11) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: vs(10) }}>
                            <Image style={{ height: vs(30), width: vs(30), borderRadius: vs(15), borderColor: AppColors.medGray, borderWidth: vs(1) }} />
                            <View>
                                <AppText style={{ fontSize: vs(11) }} variant="bold">Jordan Francis</AppText>
                                <AppText style={{ fontSize: vs(8) }}>9 Oct, 2025</AppText>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <MaterialIcons name="star-rate" size={18} color="#f6d949ff" />
                            <EvilIcons name="star" size={18} color={AppColors.medGray} />
                            <EvilIcons name="star" size={18} color={AppColors.medGray} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: vs(11) }}>
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                        <Image source={{ uri: "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg" }} style={{ height: vs(40), width: vs(40) }} />
                    </View>
                    <AppText style={{ color: AppColors.primary, fontSize: vs(11), marginTop: vs(2) }}>Absolutely love them ! Can't stop wearing.</AppText>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: .4,
        backgroundColor: AppColors.white,
        padding: vs(10)
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    info: {
        width: "80%"
    },
    image: {
        height: vs(300),
        width: "100%",
        resizeMode: "contain"
    },
    icon: {
        paddingVertical: vs(5),
        height: vs(30),
        width: vs(30),
        borderRadius: vs(15),
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ratingContainer: {
        flexDirection: "row",
        marginVertical: vs(5),
        alignItems: "center"
    },
    rateText: {
        fontSize: vs(11),
        color: AppColors.medGray,
        marginStart: vs(6)
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconsContainer: {
        flex: 1,
        alignItems: "flex-end",
        gap: vs(20)
    },
    sizeContainer: {
        flex: .58,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: vs(10)
    },
    size: {
        height: s(30),
        width: s(30),
        borderRadius: s(15),
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    innerSize: {
        height: s(28),
        width: s(28),
        borderRadius: s(14),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1350b1ff"
    },
    description: {
        padding: vs(10),
        backgroundColor: AppColors.white,
        marginBottom: vs(10)
    },
    reviewContainer: {
        backgroundColor: AppColors.white,
        padding: vs(10),
        paddingBottom: vs(100)
    }
})