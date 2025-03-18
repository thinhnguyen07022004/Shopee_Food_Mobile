import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        },
    };

    return (

        <GestureHandlerRootView >
            <SafeAreaView style={{ flex: 1 }}>
                <ThemeProvider value={navTheme}>
                    <Stack
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}>
                        <Stack.Screen
                            name="index"
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="(auth)/signup"
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }} />

                        <Stack.Screen
                            name="product/index"
                            options={{ headerTitle: "Sản phẩm" }} />

                        <Stack.Screen
                            name="(auth)/login"
                            options={{ headerTitle: "Đăng nhập" }} />
                    </Stack>
                </ThemeProvider>
            </SafeAreaView>
        </GestureHandlerRootView >
    )
}

export default RootLayout