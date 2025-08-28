import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { loginAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/constant"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import Toast from "react-native-root-toast"
import { Formik } from 'formik';
import { LoginSchema } from "@/utils/validate.schema"

const styles = StyleSheet.create({
    container: { flex: 1, marginHorizontal: 20, gap: 10 },
});

const LogInPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = async () => {
        try {
            setLoading(true)
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
        finally {
            setLoading(false)
        }
    }

    return (
        // <View style={styles.container}>
        //     <View>
        //         <Text
        //             style={{
        //                 fontSize: 25,
        //                 fontWeight: "bold",
        //                 marginVertical: 30,
        //             }}
        //         >
        //             Login
        //         </Text>
        //     </View>

        //     <ShareInput
        //         title="Email"
        //         keyboardType="email-address"
        //         value={email}
        //         setValue={setEmail}
        //     />
        //     <ShareInput
        //         title="Password"
        //         secureTextEntry={true}
        //         value={password}
        //         setValue={setPassword}
        //     />

        //     <ShareButton
        //         title="Login"
        //         onPress={handleLogin}
        //         textStyle={{ color: "#fff", fontSize: 19 }}
        //         buttonStyle={{
        //             justifyContent: "center",
        //             borderRadius: 30,
        //             backgroundColor: APP_COLOR.ORANGE,
        //             paddingVertical: 15,
        //         }}
        //         pressStyle={{ alignSelf: "stretch" }}
        //         loading={loading}
        //     />

        //     <View style={{
        //         marginVertical: 15,
        //         flexDirection: "row",
        //         gap: 10,
        //         justifyContent: "center"
        //     }}>
        //         <Text style={{
        //             textAlign: "center",
        //             color: "black"
        //         }}>
        //             Chưa có tài khoản
        //         </Text>
        //         <Link href={"/(auth)/signup"}>
        //             <Text style={{
        //                 textAlign: "center",
        //                 color: "black",
        //                 textDecorationLine: "underline"
        //             }}>
        //                 Đăng ký.
        //             </Text>
        //         </Link>
        //     </View>
        //     <SocialButton title="Sign up with" textColor="black" />
        // </View>
        <Formik
            validationSchema={LoginSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log("check values = ", values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={{ margin: 10 }}>
                    <Text>Email</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: "#ccc" }}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
                    <View style={{ marginVertical: 10 }}></View>
                    <Text>Password</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: "#ccc" }}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {errors.password && <Text style={{ color: "red" }}>{errors.password}</Text>}
                    <View style={{ marginVertical: 10 }}></View>
                    <Button onPress={handleSubmit as any} title="Submit" />
                </View>
            )}
        </Formik>
    );
}

export default LogInPage