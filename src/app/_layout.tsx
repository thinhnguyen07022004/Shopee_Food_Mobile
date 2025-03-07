import { Slot } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text>header</Text>
            <Slot />
            <Text> footer</Text>

        </View >
    )
}

export default RootLayout