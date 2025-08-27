import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { loginAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/constant"
import { Link, router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Toast from "react-native-root-toast"

const styles = StyleSheet.create({
    container: { flex: 1, marginHorizontal: 20, gap: 10 },
});

const LogInPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async () => {
        try {
            const res = await loginAPI(email, password)
            if (res.data) {
                router.replace("/(tabs)")

            }
            else {
                const m = Array.isArray(res.message) ? res.message[0] : res.message
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });

                if (res.statusCode === 400) {
                    router.replace({
                        pathname: "/(auth)/verify",
                        params: { email: email, isLogin: 1 }
                    })
                }
            }
        }
        catch (error) {
            console.log(">>>>check error:", error)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginVertical: 30,
                    }}
                >
                    Login
                </Text>
            </View>

            <ShareInput
                title="Email"
                keyboardType="email-address"
                value={email}
                setValue={setEmail}
            />
            <ShareInput
                title="Password"
                secureTextEntry={true}
                value={password}
                setValue={setPassword}
            />

            <ShareButton
                title="Login"
                onPress={handleLogin}
                textStyle={{ color: "#fff", fontSize: 19 }}
                buttonStyle={{
                    justifyContent: "center",
                    borderRadius: 30,
                    backgroundColor: APP_COLOR.ORANGE,
                    paddingVertical: 15,
                }}
                pressStyle={{ alignSelf: "stretch" }}
            // isLoading={isLoading}
            />

            <View style={{
                marginVertical: 15,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
            }}>
                <Text style={{
                    textAlign: "center",
                    color: "black"
                }}>
                    Chưa có tài khoản
                </Text>
                <Link href={"/(auth)/signup"}>
                    <Text style={{
                        textAlign: "center",
                        color: "black",
                        textDecorationLine: "underline"
                    }}>
                        Đăng ký.
                    </Text>
                </Link>
            </View>
            <SocialButton title="Sign up with" textColor="black" />
        </View>
    );
}

export default LogInPage