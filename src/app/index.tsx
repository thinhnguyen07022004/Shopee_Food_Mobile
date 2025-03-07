import { StyleSheet, Text, View } from "react-native"

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
        borderColor: "grey"
    },
    header: {
        fontSize: 40,
        fontWeight: "600",
    },
    body: {
        fontSize: 30,
        color: "orange",
        marginVertical: 10,
    },
    footer: {

    },
    btnContainer: {

    },
    btnContent: {
        backgroundColor: "green",
        borderRadius: 10,
        padding: 20,
        alignSelf: "flex-start"
    },
    btnText: {
        textTransform: "uppercase"
    }

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
                <View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnContent}>
                            <Text style={styles.btnText}>
                                Facebook
                            </Text>
                        </View>
                    </View>
                    <View><Text>Google</Text></View>
                </View>
                <View>
                    <Text>
                        Đăng nhập với email
                    </Text>
                </View>
                <View>
                    <Text>
                        Chưa có tài khoản?Đăng ký
                    </Text>
                </View>

            </View>
        </View>

    )
}

export default WelcomePage