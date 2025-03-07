import { StyleSheet, View, Text, Pressable, StyleProp, TextStyle } from 'react-native';
import { APP_COLOR } from '../../utils/constant';
import { ReactNode } from 'react';

const styles = StyleSheet.create({
    btnContainer: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        // alignSelf: "flex-start",
        backgroundColor: APP_COLOR.ORANGE
    },
    text: {
        textTransform: "uppercase"
    },
})
interface IProps {
    title: string;
    onPress: () => void;

    textType?: StyleProp<TextStyle>
    PressType?: StyleProp<TextStyle>
    btnStyle?: StyleProp<TextStyle>
    icons?: ReactNode
}
const ShareButton = (props: IProps) => {
    const { title, onPress, textType, PressType, btnStyle, icons } = props
    return (
        <>
            <Pressable
                style={({ pressed }) => ([{
                    opacity: pressed === true ? 0.5 : 1,
                    alignSelf: "flex-start",

                }, PressType
                ])}
                onPress={onPress}>
                <View style={[styles.btnContainer, btnStyle]}>
                    {icons}
                    <Text style={textType}> {title} </Text>
                </View>
            </Pressable>
        </>
    )
}

export default ShareButton   