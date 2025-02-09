// Plant detail
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { usePlantContext } from "@/context/PlantContext";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import BackButton from "@/components/BackButton";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import ThemeButton from "@/components/ThemeButton";

export default function FlowerDetailsScreen() {
    const { id } = useLocalSearchParams()
    const { plants, updatePlant, removePlant } = usePlantContext()
    const plant = plants.find(plant => plant.id.toString() === id)

    const [name, setName] = useState(plant?.name || "");
    const [notes, setNotes] = useState(plant?.notes || "");
    const [photo, setPhoto] = useState(plant?.photo || "");
    const [date, setDate] = useState(plant?.date || "");

    useEffect(() => {
        if (plant) {
            setName(plant.name)
            setNotes(plant.notes)
            setPhoto(plant.photo)
            setDate(plant.date)

        }
    }, [plant])

    const handleSave = () => {
        if (plant) { // error check
            const updatedPlant = {
                ...plant,
                name,
                notes,
                photo,
                date,
            }
            updatePlant(updatedPlant)
        }
        Alert.alert(
            "Save successfull",
            "New information saved",
            [
                {
                    text: "OK",
                    onPress: () => console.log("Ok pressed")
                }
            ]
        )
        router.back()
    }

    const handleDelete = () => {
        if (!plant || plant.id === undefined) return // quick error check

        Alert.alert("Delete Plant", "Are you sure you want to remove this plant?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Delete",
                style: "destructive",
                onPress: () => {
                    removePlant(plant?.id);
                    Alert.alert("Deleted", "The plant has been removed.");
                    router.back(); // Navigate back after deleting
                },
            },
        ]);
    };


    if (!plant) {
        return (
            <ThemedView>
                <ThemedText>Plant not found</ThemedText>
                <ThemedText><Link href="/(tabs)">Go back</Link></ThemedText>
            </ThemedView>
        )
    }
    console.log(id)

    return (
        <ThemedView style={styles.screenContainer}>

            <ThemedView style={styles.container}>
                
                <ThemedView style={styles.titleContainer}> {/* Title */} 
                    <ThemedText type="title">{name} Details</ThemedText>
                </ThemedView>


                <ScrollView style={{ width: "100%" }} contentContainerStyle={{ justifyContent: "center", alignItems: "center", flexGrow: 1, width: "100%" }}>

                    <ThemedText>Name:</ThemedText>
                    <ThemedTextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.themedTextInput}

                    />

                    <ThemedText>Notes:</ThemedText>
                    <ThemedTextInput
                        value={notes}
                        onChangeText={setNotes}
                        style={styles.themedTextInput}

                    />
                    <ThemedText>Photo URL:</ThemedText> {/* If you need to find its location */}
                    <ThemedTextInput
                        value={photo}
                        scrollEnabled
                        onChangeText={setPhoto}
                        style={styles.themedTextInput}
                    />
                    <ThemedText>Date:</ThemedText> {/* Date in default yyyy-mm-dd format */}
                    <ThemedTextInput
                        value={date}

                        onChangeText={setDate}
                        style={styles.themedTextInput}
                    />

                    <Image source={{ uri: photo }} style={{ width: "100%", height: 200 }} contentFit="contain" />

                </ScrollView>

                <ThemeButton func={handleSave} text="Save" />
                <ThemeButton func={handleDelete} text="Delete" />
                <BackButton router={router} text="Go back">

                </BackButton>

            </ThemedView>
        </ThemedView>

    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        width: "95%",
        height: "100%",
        marginTop: 30,
    },
    titleContainer: {
        marginTop: 10
    },
    themedTextInput: {
        width: "90%",
        borderWidth: 1,
        marginBottom: 10,
        padding: 5
    }
})
