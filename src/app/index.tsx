import { StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button"
import { APP_COLOR } from "utils/constant"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        borderColor: "red"

    },
    welcomeText: {
        flex: 0.6,
        borderWidth: 5,
        borderColor: "green",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20,
    },
    welcomeButton: {
        flex: 0.4,
        borderWidth: 5,
        borderColor: "grey",
        gap: 20
    },
    header: {
        fontSize: 40,
        fontWeight: "600",
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10,
    },
    footer: {

    },

})
const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeText}>
                <Text style={styles.header}>
                    Welcome to
                </Text>
                <Text style={styles.body}>
                    @HoidanIT - Food
                </Text>
                <Text style={styles.footer}>
                    Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
                </Text>
            </View>
            <View style={styles.welcomeButton}>
                <Text>
                    Đăng nhập với
                </Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 30,
                }}>
                    <ShareButton
                        title="Facebook"
                        onPress={() => alert("me")}
                        textStyle={{ textTransform: "uppercase" }}
                        buttonStyle={{
                            justifyContent: "center",
                            borderRadius: 30,
                            backgroundColor: "#fff"
                        }}
                        icon={
                            <FontAwesome5 name="facebook" size={24} color="black" />
                        }
                    />
                    <ShareButton
                        title="Google"
                        onPress={() => alert("me")}
                        textStyle={{ textTransform: "uppercase" }}
                        buttonStyle={{
                            justifyContent: "center",
                            borderRadius: 30,
                            paddingHorizontal: 20,
                            backgroundColor: "#fff"
                        }}
                        icon={
                            <FontAwesome5 name="google" size={24} color="black" />
                        }
                    />
                </View>
                <View>
                    <ShareButton
                        title="Đăng nhập với email"
                        onPress={() => alert("me")}
                        textStyle={{ color: "#fff", paddingVertical: 5 }}
                        buttonStyle={{
                            justifyContent: "center",
                            borderRadius: 30,
                            marginHorizontal: 50,
                            paddingHorizontal: 10,
                            backgroundColor: "#2c2c2c"
                        }}
                        pressStyle={{ alignSelf: "stretch" }}
                    />
                </View>
                <View>
                    <Text style={{ textAlign: "center" }}>
                        Chưa có tài khoản? Đăng ký.
                    </Text>
                </View>

            </View>
        </View>

    )
}

export default WelcomePage