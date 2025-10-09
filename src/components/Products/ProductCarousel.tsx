import React, { useState, useRef, useEffect } from 'react';
import { FlatList, View, Image, Dimensions, StyleSheet } from 'react-native';
import { vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';

const data = [
    { id: '1', image: 'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg' },
    { id: '2', image: 'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg' },
    { id: '3', image: 'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg' },
];

const { width } = Dimensions.get('window');

const ProductCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const flatListRef = useRef(null)

    useEffect(()=>{

      const interval =  setInterval(()=>{
            let nextIndex = currentIndex + 1

            if(nextIndex >= data.length){
                nextIndex = 0
            }

            flatListRef.current?.scrollToIndex({
                index : nextIndex,
                animated : true
            })

            setCurrentIndex(nextIndex)
        },3000)

         return ()=> clearInterval(interval)
    },[currentIndex])

    return (
        <View>

            {/* Product Images */}
            <FlatList
                ref={flatListRef}
                data={data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.slide, { width }]}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                )}

                onScroll={(e) => {
                    const x = e.nativeEvent.contentOffset.x
                    const index = Math.round(x / width)
                    setCurrentIndex(index)
                }}
                scrollEventThrottle={16}
            />

            {/* Pagination dots */}
            <View style={styles.paginationContainer}>
                {data.map((item, index) => {
                    return (
                        <View style={[styles.pagination, { backgroundColor: currentIndex === index ? "#1350b1ff" : AppColors.medGray }]} key={index} />
                    )
                })}
            </View>
        </View>
    );
};


export default ProductCarousel;


const styles = StyleSheet.create({
    slide: { justifyContent: 'center', alignItems: 'center' },
    image: { width: width * 0.98, height: 400, borderRadius: 10, resizeMode: 'cover', },
    paginationContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: AppColors.white
    },
    pagination: {
        height: vs(6),
        width: vs(6),
        borderRadius: vs(3),
        marginLeft: vs(8)
    }
});
