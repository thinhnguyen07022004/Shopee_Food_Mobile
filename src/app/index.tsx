import { Link, router } from "expo-router"
import { Button, Text, View } from "react-native"

const AppRoot = () => {
    const handleLogin = () => {
        alert("login")
        // router.navigate("/login")
        router.navigate("/user")
    }

    return (
        <View>
            <Text>1 Hello World with react Native</Text>
            <Link href={"/hoidanit"}>
                Go to Hoidanit
            </Link>
            <Link href={"/like"}>Go to Like</Link>
            <Link href={"/like/like.details"} asChild>
                <Button title="Go to like details" />
            </Link>

            <View style={{ margin: 20 }}>
                <Button title="Login"
                    onPress={handleLogin} />
            </View>

        </View>
    )
}

export default AppRoot