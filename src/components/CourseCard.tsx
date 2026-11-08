import { Platform, StyleSheet, Text, View } from "react-native";

type CourseCardProps = {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
  width: number;
};

export default function CourseCard({
  id,
  code,
  title,
  units,
  schedule,
  width,
}: CourseCardProps) {
  return (
    <View
      accessibilityLabel={`${id} ${title}`}
      style={[styles.card, { width }]}
    >
      <View style={styles.mainRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{code}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.schedule}>{schedule}</Text>
        </View>
      </View>

      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{units} units</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Lecture</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",

    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  mainRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    width: 65,
    minHeight: 32,
    backgroundColor: "#25205C",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    padding: 5,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#252525",
  },

  schedule: {
    fontSize: 11,
    color: "#777777",
    marginTop: 5,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    gap: 8,
  },

  tag: {
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  tagText: {
    fontSize: 10,
    color: "#555555",
  },
});
