import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { APP_COLOR } from "@/utils/constant"
import { Link, router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { registerAPI } from "@/utils/api"
import Toast from "react-native-root-toast"
import { Formik } from "formik"
import { SignUpSchema } from "@/utils/validate.schema"

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        gap: 10,
        marginHorizontal: 20
    },

})

const SignUpPage = () => {
    // const [name, setName] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const HandleSignUp = async (email: string, password: string, name: string) => {

        try {
            setLoading(true)
            const res = await registerAPI(email, password, name)
            if (res.data) {
                router.replace({
                    pathname: "/(auth)/verify",
                    params: { email: email }
                })
            } else {
                const m = Array.isArray(res.message) ? res.message[0] : res.message
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
            }
        } catch (error) {
            console.log(">>>>check error:", error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={styles.contanier}>
                <View >
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 600,
                        marginVertical: 30
                    }}
                    >Đăng ký tài khoản</Text>
                </View>
                <ShareInput
                    title="Họ tên"
                    value={name}
                    setValue={setName}
                />
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
                <View style={{ marginVertical: 10 }}></View>
                <ShareButton
                    loading={loading}
                    title="Đăng Ký"
                    onPress={HandleSignUp}
                    textStyle={{
                        textTransform: "uppercase",
                        color: "#fff",
                        paddingVertical: 5
                    }}
                    buttonStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 50,
                        paddingHorizontal: 10,
                        backgroundColor: APP_COLOR.ORANGE,
                    }}
                    pressStyle={{ alignSelf: "stretch" }}
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
                        Đã có tài khoản
                    </Text>
                    <Link href={"/(auth)/login"}>
                        <Text style={{
                            textAlign: "center",
                            color: "black",
                            textDecorationLine: "underline"
                        }}>
                            Đăng nhập.
                        </Text>
                    </Link>
                </View>

                <SocialButton title="Sign in with" textColor="black" />
            </View> */}
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={(values) => HandleSignUp(values.email, values.password, values.name)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    // <View style={{ margin: 10 }}>
                    //     <Text>Email</Text>
                    //     <TextInput
                    //         style={{ borderWidth: 1, borderColor: "#ccc" }}
                    //         onChangeText={handleChange('email')}
                    //         onBlur={handleBlur('email')}
                    //         value={values.email}
                    //     />
                    //     {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}
                    //     <View style={{ marginVertical: 10 }}></View>
                    //     <Text>Password</Text>
                    //     <TextInput
                    //         style={{ borderWidth: 1, borderColor: "#ccc" }}
                    //         onChangeText={handleChange('password')}
                    //         onBlur={handleBlur('password')}
                    //         value={values.password}
                    //     />
                    //     {errors.password && <Text style={{ color: "red" }}>{errors.password}</Text>}
                    //     <View style={{ marginVertical: 10 }}></View>
                    //     <Button onPress={handleSubmit as any} title="Submit" />
                    // </View>
                    <View style={styles.contanier}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: "bold",
                                    marginVertical: 30,
                                }}
                            >
                                Sign Up
                            </Text>
                        </View>

                        <ShareInput
                            title="Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                        />

                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />
                        <ShareInput
                            title="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                        />

                        <ShareButton
                            loading={loading}
                            title="Đăng Ký"
                            onPress={handleSubmit}
                            textStyle={{
                                textTransform: "uppercase",
                                color: "#fff",
                                paddingVertical: 5
                            }}
                            buttonStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingHorizontal: 10,
                                backgroundColor: APP_COLOR.ORANGE,
                            }}
                            pressStyle={{ alignSelf: "stretch" }}
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
                                Đã có tài khoản
                            </Text>
                            <Link href={"/(auth)/login"}>
                                <Text style={{
                                    textAlign: "center",
                                    color: "black",
                                    textDecorationLine: "underline"
                                }}>
                                    Đăng nhập.
                                </Text>
                            </Link>
                        </View>

                        <SocialButton title="Sign in with" textColor="black" />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default SignUpPage