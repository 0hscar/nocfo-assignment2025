import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Router } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";




type BackButtonProps = {
    router: Router // router doesn't like being "possibly undefined", hence it's own button
    text?: string
    style?: object
    lightColor?: string
    darkColor?: string
}


const BackButton: React.FC<BackButtonProps> = ({ router, text, style, lightColor, darkColor }) => {

    const backgroundColor = useThemeColor({}, "icon")
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, "text")

    return (
        <Pressable
            onPress={() => router.back()}
            style={[styles.BackButton, style, { backgroundColor }]}
        >
            <ThemedText style={{ color: textColor }}>
                {text}
            </ThemedText>


        </Pressable>
    )
}

const styles = StyleSheet.create({
    BackButton: {
        alignSelf: "center",
        width: "90%",
        alignItems: "center",
        padding: 10,
        margin: 5,

        borderRadius: 10,
    }
})





export default BackButton