import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    InputGroup: {
        padding: 5,
        gap: 10
    },
    InputText: {
        fontSize: 18,

    },
    Input: {
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 5

    }
})

interface IProps {
    title?: string;
    keyboardType?: KeyboardTypeOptions,
}

const ShareInput = (props: IProps) => {
    const { title, keyboardType } = props
    const [isFocus, setIsFocus] = useState<boolean>(false)
    return (
        <View style={styles.InputGroup}>
            <Text style={styles.InputText}>{title}</Text>
            <TextInput
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                keyboardType={keyboardType}
                style={[styles.Input,
                { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }
                ]} />
        </View>
    )
}

export default ShareInput