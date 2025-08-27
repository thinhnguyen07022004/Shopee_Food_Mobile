import LoadingOverlay from "@/components/loading/overlay";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant"
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native"
import OTPTextView from 'react-native-otp-textinput'
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20,
    },
});



const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code, setCode] = useState<string>('');

    const { email, isLogin } = useLocalSearchParams();

    const verifyCode = async () => {
        Keyboard.dismiss();
        // call api verify code
        setIsSubmit(true);
        const res = await verifyCodeAPI(email as string, code);
        setIsSubmit(false);

        if (res.data) {
            // success
            otpRef.current?.clear();
            otpRef?.current?.clear();
            Toast.show("Active success, enjoy your meal", {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1,
            });
            if (isLogin) {
                router.replace("/(tabs)");
            } else {
                router.replace("/(auth)/login");
            }
        } else {
            // fail
            Toast.show(res.message as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            });
        }
    }

    useEffect(() => {
        if (code && code.length === 6) {
            verifyCode();
        }
    }, [code]);

    const handleResendOTPCode = async () => {
        otpRef?.current?.clear();
        const res = await resendCodeAPI(email as string);
        const m = res.data ? "Resend Success" : res.message;
        Toast.show(m as string, {
            duration: Toast.durations.LONG,
            textColor: "white",
            backgroundColor: APP_COLOR.ORANGE,
            opacity: 1,
        });
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Verify account</Text>
                <Text style={{ marginVertical: 10 }}>
                    Please enter the confirmation code to email: thinh.nguyen@gmail.com
                </Text>
                <View style={{ marginVertical: 20 }}>
                    <OTPTextView
                        ref={otpRef}
                        autoFocus
                        inputCount={6}
                        inputCellLength={1}
                        tintColor={APP_COLOR.ORANGE}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.GREY,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            // @ts-ignore:next-line
                            color: APP_COLOR.ORANGE,
                        }}
                        handleTextChange={setCode}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginVertical: 10,
                        gap: 10,
                        justifyContent: "center",
                    }}
                >
                    <Text>Can't get OTP,</Text>
                    <Text
                        onPress={handleResendOTPCode}
                        style={{ textDecorationLine: "underline", fontWeight: "bold" }}
                    >
                        Resend
                    </Text>
                </View>
            </View>
            {isSubmit && <LoadingOverlay />}
        </>
    )
}

export default VerifyPage