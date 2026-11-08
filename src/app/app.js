import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function ProfileCard({ name, role, image, isFeatured }) {
  return (
    <View style={[styles.card, isFeatured && styles.cardHighlighted]}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard
        name="Juan Dela Cruz"
        role="IT Instructor"
        image="https://i.pravatar.cc/150?img=12"
        isFeatured={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    margin: 10,
    borderRadius: 12,
    width: "90%",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },

  role: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },

  cardHighlighted: {
    borderWidth: 2,
    borderColor: "#2196F3",
    backgroundColor: "#E3F2FD",
  },
});
