import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { tabStyles } from "../../constants/placeholderStyles";



export default function SettingsScreen() {
    return (
        <ThemedView style={tabStyles.tempContainer}>
            <ThemedText>Settings stuff here</ThemedText>
        </ThemedView>
    )
}
