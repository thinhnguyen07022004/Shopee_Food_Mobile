import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button"
import { APP_COLOR } from "utils/constant"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import bg from '@/assets/auth/welcome-background.png'
import falogo from '@/assets/auth/facebook.png'
import gglogo from '@/assets/auth/google.png'
import { LinearGradient } from 'expo-linear-gradient';
import TextBetweenLine from "@/components/button/text.between.line";
import { Link, Redirect } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,

    },
    welcomeText: {
        flex: 0.6,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20,
    },
    welcomeButton: {
        flex: 0.4,
        gap: 30
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
    if (true) {
        return (
            <Redirect href={"/(auth)/verify"} />
        )
    }
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}
            >
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
                        <TextBetweenLine title="Đăng nhập với" />
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
                                    <Image source={falogo} />
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
                                    <Image source={gglogo} />
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
                                    backgroundColor: "#2c2c2c",
                                    borderColor: "#505050",
                                    borderWidth: 1
                                }}
                                pressStyle={{ alignSelf: "stretch" }}
                            />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                textAlign: "center",
                                color: "white"
                            }}>
                                Chưa có tài khoản?
                            </Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{
                                    textAlign: "center",
                                    color: "white",
                                    textDecorationLine: "underline"
                                }}>
                                    Đăng ký.
                                </Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>

    )
}

export default WelcomePage