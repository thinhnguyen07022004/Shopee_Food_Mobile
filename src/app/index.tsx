import { Redirect, router } from "expo-router";
import { useEffect, useState } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootPage = () => {
    const { setAppState } = useCurrentApp()
    const [state, setState] = useState<any>();

    useEffect(() => {
        const prepare = async () => {
            try {
                // Check if access token exists first
                const access_token = await AsyncStorage.getItem("access_token");

                // If no access token, go directly to welcome screen
                if (!access_token) {
                    router.replace("/(auth)/welcome");
                    return;
                }

                const res = await getAccountAPI();
                if (res.data) {
                    setAppState({
                        user: res.data.user,
                        access_token: access_token,
                    });
                    router.replace("/(tabs)");
                } else {
                    router.replace("/(auth)/welcome");
                }
            } catch (e) {
                console.warn(e);
                setState(() => {
                    throw new Error("Can't connect to Backend Server!");
                });
            } finally {
                // Tell the application to render
                SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    // if (true) {
    //     return (
    //         <Redirect href={"/(auth)/signup"} />
    //     )
    // }


    return (<></>)
}

export default RootPage