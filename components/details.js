import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Colors from "../assets/colors/colors";


// Really good if you want to get the height of the screen (to make a pic cover part or all of the screen)
// Check the styling below for backgroundImage
const height = Dimensions.get("window").height;

const Details = ({route, navigation}) => {

    const {item} = route.params
    return (
        <View styles={styles.container}>
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImage}
            >
            </ImageBackground>
            <View style={styles.descriptionWrapper}>

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
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: Colors.black,    
    }
})

export default Details;
