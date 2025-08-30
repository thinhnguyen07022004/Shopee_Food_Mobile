import { FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import demo from "@/assets/demo.jpg"
import { APP_COLOR } from "@/utils/constant";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { getTopRestaurantAPI } from "@/utils/api";
import { router } from "expo-router";


interface IProps {
    name: string;
    description: string;
    refAPI: string;
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    sale: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: APP_COLOR.ORANGE,
        padding: 3,
        borderRadius: 3,
        alignSelf: "flex-start",
    },
})

const CollectionHome = (props: IProps) => {
    const { name, description, refAPI } = props
    const [restaurants, setRestaurants] = useState<ITopRestaurant[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTopRestaurantAPI(refAPI)
            if (res.data) {
                setRestaurants(res.data)
            }
            else {
                // error
            }
        }
        fetchData()
    }, [refAPI])

    const backend =
        Platform.OS === "android"
            ? process.env.EXPO_PUBLIC_ANDROID_API_URL
            : process.env.EXPO_PUBLIC_IOS_API_URL;
    const baseImage = `${backend}/images/restaurant`;

    return (
        <>
            <View style={{ height: 10, backgroundColor: "#e9e9e9" }} />
            <View style={styles.container}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text
                        style={{
                            color: APP_COLOR.ORANGE,
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        {name}
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Text style={{ color: "#5a5a5a" }}>See All</Text>
                        <AntDesign
                            style={{ color: "#5a5a5a" }}
                            name="right"
                            size={15}
                            color="black"
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: "#5a5a5a" }}>{description}</Text>
                </View>
                <FlatList
                    data={restaurants}
                    horizontal
                    contentContainerStyle={{ gap: 5 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() =>
                                    // router.navigate({
                                    //     pathname: "/product/[id]",
                                    //     params: { id: item._id },
                                    // })
                                    router.navigate('/product')
                                }
                            >
                                <View style={{ backgroundColor: "#efefef" }}>
                                    <Image
                                        style={{ width: 130, height: 130 }}
                                        source={{ uri: `${baseImage}/${item.image}` }}
                                    />
                                    <View style={{ padding: 5 }}>
                                        <Text
                                            numberOfLines={1}
                                            ellipsizeMode="tail"
                                            style={{ fontWeight: "bold", maxWidth: 130 }}
                                        >
                                            {item.name}
                                        </Text>
                                        <View style={styles.sale}>
                                            <Text style={{ color: APP_COLOR.ORANGE }}>
                                                Flash Sale
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default CollectionHome