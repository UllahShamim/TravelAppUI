import React from "react";
import { 
    View,
    Text, 
    StyleSheet, 
    ImageBackground, 
    Dimensions,
    TouchableOpacity,
} from "react-native";
import Colors from "../assets/colors/colors";

import Entypo from "react-native-vector-icons/Entypo";


// Really good if you want to get the height of the screen (to make a pic cover part or all of the screen)
// Check the styling below for backgroundImage
const height = Dimensions.get("window").height;

const Details = ({route, navigation}) => {

    const {item} = route.params
    return (
        <View styles={styles.container}>
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImage}>
                <TouchableOpacity 
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={Colors.white}/>
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={Colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={Colors.orange} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.duration}</Text>
                            <Text style={styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert("Thank you for booking")}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: "space-between",
    },
    descriptionWrapper: {
        backgroundColor: Colors.white,
        height: height,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,

    },
    itemTitle: {
        fontFamily: "Lato_700Bold",
        fontSize: 32,
        color: Colors.white,
    },
    locationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        color: Colors.white,
        marginTop: 5,
    },
    locationText: {
        fontFamily: "Lato_700Bold",
        fontSize: 16,
        color: Colors.white,
    },
    heartWrapper: {
        position: "absolute",
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: Colors.white,
        borderRadius: 64,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    descriptionTitle: {
        fontFamily: "Lato_700Bold",
        fontSize: 24,
        color: Colors.black,
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: "Lato_400Regular",
        fontSize: 16,
        color: Colors.darkGrey,
        height: 100,
    },
    infoWrapper: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
        marginTop: 30,
    },
    infoItem: {
        
    },
    infoTitle: {
        fontFamily: "Lato_700Bold",
        fontSize: 12,
        color: Colors.grey,
    },
    infoTextWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 5,
    },
    infoText: {
        fontFamily: "Lato_700Bold",
        fontSize: 24,
        color: Colors.orange,
    },
    infoSubText: {
        fontFamily: "Lato_700Bold",
        fontSize: 14,
        color: Colors.grey,
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: Colors.orange,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: "Lato_700Bold",
        fontSize: 18,
        color: Colors.white,
    },
})

export default Details;
