import { Link } from "expo-router"
import { Text, View } from "react-native"

const AppRoot = () => {
    return (
        <View>
            <Text>1 Hello World with react Native</Text>
            <Link href={"/hoidanit"}>Go to Hoidanit</Link>
            <Link href={"/like"}>Go to Like</Link>
        </View>
    )
}

export default AppRoot