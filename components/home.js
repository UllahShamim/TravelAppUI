import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    StatusBar, 
    ScrollView,
    Image,
    ImageBackground,
    FlatList,
    TouchableOpacity,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import discoverData from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";

import profile from  "../assets/images/person.png";
import Colors from "../assets/colors/colors";


const Home = ({navigation}) => {
    const renderDiscoverItem = ({item}) => {
        return (
                <TouchableOpacity 
                    onPress={() => 
                        navigation.navigate("Details", {
                            item: item,
                })}>
                    <ImageBackground
                        source={item.image}
                        style={[styles.discoverItem, {
                            marginLeft: item.id === "discover-1" ? 20 : 0
                        }]}
                        imageStyle = {styles.discoverItemImage}
                        >
                        <Text style={styles.discoverItemTitle}>{item.title}</Text>
                        <View style={styles.discoverItemLocationWrapper}>
                            <Entypo name="location-pin" size={18} color={Colors.white} />
                            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>        
        );
    };

    const renderActivityItem = ({item}) => {
        return (
        <View style={[styles.activityItemWrapper, {
            marginLeft: item.id === "activities-1" ? 20 : 0
        }]}>
            <Image source={item.image} style={styles.activityItemImage} />
            <Text style={styles.activityItemTitle}>{item.title}</Text>
        </View>
     )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather 
                            name="menu" size={32} 
                            color={Colors.black} 
                            style={styles.menuIcon}
                            />
                        <Image source={profile} style={styles.profileImage}/>
                    </View>
                </SafeAreaView>
                {/* Discover section */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoryText, { color: Colors.orange }]}>All</Text>
                        <Text style={styles.discoverCategoryText}>Destinations</Text>
                        <Text style={styles.discoverCategoryText}>Cities</Text>
                        <Text style={styles.discoverCategoryText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList 
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.activitiesItemsWrapper}>
                        <FlatList 
                            data={activitiesData}
                            renderItem={renderActivityItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: StatusBar.currentHeight,
    },
    // Header
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 15,
    },
    menuIcon: {

    },
    // Discover section
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato_700Bold",
        fontSize: 32,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 30,
        fontFamily: "Lato_400Regular",
        fontSize: 16,
        color: Colors.grey,
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontFamily: "Lato_700Bold",
        fontSize: 18,
        color: Colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: "Lato_700Bold",
        fontSize: 14,
        color: Colors.white,
    },
    // Activities
    activitiesWrapper : {
        marginTop: 10,

    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontFamily: "Lato_700Bold",
        fontSize: 24,
        color: Colors.black,
    },
    activitiesItemsWrapper: {
        paddingVertical: 20,
    },
    activityItemWrapper: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 20,
    },
    activityItemImage: {
        width: 36,
    },
    activityItemTitle: {
        marginTop: 5,
        fontFamily: "Lato_700Bold",
        fontSize: 14,
        color: Colors.grey,

    },
});

export default Home;
