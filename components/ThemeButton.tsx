
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";




type ThemeButtonProps = {
    func?: () => void
    text?: string
    style?: object
    lightColor?: string
    darkColor?: string
}



const ThemeButton: React.FC<ThemeButtonProps> = ({ func, text, style, lightColor, darkColor }) => {

    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "tint")

    return (
        <Pressable
            onPress={func}
            style={[styles.ThemeButton, style, { backgroundColor }]}
        >
            <ThemedText style={{ color: "black" }}>
                {text}
            </ThemedText>


        </Pressable>
    )
}

const styles = StyleSheet.create({
    ThemeButton: {
        alignSelf: "center",
        width: "90%",
        alignItems: "center",
        padding: 10,
        margin: 5,
        borderRadius: 10,
    }
})




export default ThemeButton