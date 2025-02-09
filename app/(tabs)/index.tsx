// Home screen
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList } from 'react-native';
import { usePlantContext } from '@/context/PlantContext';
import { router } from 'expo-router';
import ThemeButton from '@/components/ThemeButton';



export default function HomeScreen() {
  const { plants } = usePlantContext() // Get plants

  return (
    <ThemedView style={styles.screenContainer}>
      <ThemedView style={styles.container}>

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">All Plants</ThemedText>
        </ThemedView>

        <FlatList
          data={plants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/flowers/${item.id}`)}> {/* Make plant clickable --> navigate to detailed view */}

              <ThemedView style={styles.plantContainer}> {/* Plant container */}

                <ThemedView style={{ width: "20%", maxHeight: 400 }}> {/* Plant Photo container */}
                  <Image source={{ uri: item.photo }} style={styles.plantPhoto} />
                </ThemedView>

                <ThemedView style={styles.plantTextContainer}> {/* Plant text container */}
                  <ThemedText style={styles.plantText}>{item.name}</ThemedText> {/* Plant name */}

                  <ThemedText style={{ textAlign: "center" }}>{ // Plant date
                    new Date(item.date).toLocaleDateString("en-UK", { // Visually better than unformatted "yyyy-mm-ddThh-mm-ss-nnnZ"
                      weekday: "long",
                      month: "long",
                      year: "numeric",
                      day: "numeric"
                    })
                  }
                  </ThemedText>
                </ThemedView>

              </ThemedView>

            </TouchableOpacity>)}
        />

        <ThemedView style={{ bottom: 0 }}> {/* In container for better position control */}
          <ThemeButton func={() => router.push("/flowers/newFlower")} text={"Add new Flower"} /> {/* New flower button */}
        </ThemedView>

      </ThemedView>
    </ThemedView>

  )
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
  },
  container: {
    marginTop: 30, // Quick fix for indented screens (OnePlus 7t for example)
    height: "95%"

  },
  plantContainer: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    marginBottom: 10,
  },
  plantPhoto: {
    width: "100%",
    height: 100,
    borderRadius: 10 //smooth corners
  },
  plantTextContainer: {
    backgroundColor: "gray", 
    width: "80%", 
    justifyContent: "center", 
    borderRadius: 10
  },
  plantText: { //Both date and name
    textAlign: "center"
  },

  titleContainer: {
    marginTop: 10
  },
  
});
