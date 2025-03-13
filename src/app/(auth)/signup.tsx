import ShareButton from "@/components/button/share.button"
import { APP_COLOR } from "@/utils/constant"
import { StyleSheet, Text, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        paddingTop: 40,
        gap: 10,
        marginHorizontal: 20
    },
    InputGroup: {
        padding: 5,
        gap: 10
    },
    InputText: {
        fontSize: 18,

    },
    Input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5

    }
})

const SignUpPage = () => {
    return (
        <View style={styles.contanier}>
            <View >
                <Text>Đăng ký tài khoản</Text>
            </View>
            <View style={styles.InputGroup}>
                <Text style={styles.InputText}>Họ tên</Text>
                <TextInput style={styles.Input} />
            </View>
            <View style={styles.InputGroup}>
                <Text style={styles.InputText}>Email</Text>
                <TextInput keyboardType="email-address" style={styles.Input} />
            </View>
            <View style={styles.InputGroup}>
                <Text style={styles.InputText}>Password</Text>
                <TextInput style={styles.Input} />
            </View>
            <ShareButton
                title="Đăng Ký"
                onPress={() => alert("me")}
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
        </View>
    )
}

export default SignUpPage