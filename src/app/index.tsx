import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useState } from "react";
import CourseCard from "../components/CourseCard";

type Course = {
  id: string;
  code: string;
  title: string;
  units: number;
  schedule: string;
};

const initialCourses: Course[] = [
  {
    id: "c1",
    code: "IT313",
    title: "Mobile Programming",
    units: 3,
    schedule: "MWF 8:00–9:00 AM",
  },
  {
    id: "c2",
    code: "IT311",
    title: "Systems Integration",
    units: 3,
    schedule: "TTh 9:30–11:00 AM",
  },
  {
    id: "c3",
    code: "IT321",
    title: "Information Assurance",
    units: 3,
    schedule: "MWF 1:00–2:00 PM",
  },
  {
    id: "c4",
    code: "IT331",
    title: "Web Systems & Technologies",
    units: 3,
    schedule: "TTh 1:00–2:30 PM",
  },
  {
    id: "c5",
    code: "IT341",
    title: "Human-Computer Interaction",
    units: 3,
    schedule: "MWF 3:00–4:00 PM",
  },
];

export default function CourseCatalog() {
  const { width } = useWindowDimensions();

  const [courses] = useState<Course[]>(initialCourses);

  const cardWidth = width * 0.92;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IT313 Course Catalog</Text>

        <Text style={styles.headerSubtitle}>5 courses this semester</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            schedule={course.schedule}
            width={cardWidth}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#25205C",
    padding: 20,
    paddingTop: 25,
    paddingBottom: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 15,
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#D8D5F0",
    marginTop: 5,
  },

  list: {
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 25,
  },
});
