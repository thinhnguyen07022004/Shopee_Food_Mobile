import { StyleSheet, Text, View } from "react-native"

interface IProps {
    name: string;
}
const styles = StyleSheet.create({
    contaniner: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    }
})

const CollectionHome = (props: IProps) => {
    const { name } = props
    return (
        <View>
            <Text style={styles.contaniner}>
                {name}
            </Text>
        </View>
    )
}

export default CollectionHome