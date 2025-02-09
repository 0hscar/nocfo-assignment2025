import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { tabStyles } from "../../constants/placeholderStyles";



export default function ProfileScreen() {
    return (
        <ThemedView style={tabStyles.tempContainer}>
            <ThemedText>Profile stuff here</ThemedText>
        </ThemedView>
    )
}

