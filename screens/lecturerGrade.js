import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LecturerGradesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [presentationGrade, setPresentationGrade] = useState("");
  const [examGrade, setExamGrade] = useState("");
  const [overallMarks, setOverallMarks] = useState("");
  const [studentId, setStudentId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [FacultyId, setFacultyId] = useState("");
  const [DegreeID, setDegreeID] = useState("");
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      const token = await AsyncStorage.getItem("jwt");
      const response = await axios.get(
        "http://192.168.8.132:3000/api/lecture-modules/getAllLectureModulesNoFilter",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setModules(response.data);
    };
    fetchModules();
  }, []);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  const handleSave = async () => {
    const token = await AsyncStorage.getItem("jwt");
    const ModuleName = selectedModule;
    // Make a POST request
    await axios.post(
      "http://192.168.8.132:3000/api/lecturer/AddResult",
      {
        studentId: studentId,
        ModuleName: ModuleName,
        Type: typeId,
        Marks: examGrade,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // Reset the form fields
    setPresentationGrade("");
    setExamGrade("");
    setOverallMarks("");
    setStudentId("");
    setTypeId("");
    setFacultyId("");
    setDegreeID("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.headingbox}>
          <Text style={styles.welcomeText}>Grades</Text>
        </View>

        {/* Module selection */}
        <View style={styles.moduleSelection}>
          {modules.map((module, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.moduleButton,
                selectedModule === module.name && styles.selectedModuleButton,
              ]}
              onPress={() => handleModuleClick(module.name)}
            >
              <Text style={styles.moduleText}>{module.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Grades input */}
        {selectedModule && (
          <View style={styles.gradesContainer}>
            <Text style={styles.gradesHeading}>Grades</Text>

            <View style={styles.gradeItem}>
              <Text style={styles.gradeLabel}>Student ID:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setStudentId}
                value={studentId}
                keyboardType="default"
              />
            </View>

            <View style={styles.gradeItem}>
              <Text style={styles.gradeLabel}>Type:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setTypeId}
                value={typeId}
                keyboardType="default"
              />
            </View>

            <View style={styles.gradeItem}>
              <Text style={styles.gradeLabel}>Marks:</Text>
              <TextInput
                style={styles.input}
                onChangeText={setExamGrade}
                value={examGrade}
                keyboardType="numeric"
              />
            </View>

            {/* Add more input fields for other grades */}
            <View
              style={[
                styles.saveButtonContainer,
                { backgroundColor: "#24a0ed", paddingLeft: 6, paddingRight: 6 },
              ]}
            >
              <Button title="Add" onPress={handleSave} />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
  },
  container: {
    // Remove flex: 1 from here if it exists
    marginTop: -15,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  moduleSelection: {
    flexDirection: "column",
    marginBottom: 20,
  },
  moduleButton: {
    marginBottom: 10,
    backgroundColor: "#4169e1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 70, // Ensure height of the button
    minWidth: "90%", // Use minimum width instead of width for dynamic content
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedModuleButton: {
    backgroundColor: "#2b4e96",
  },
  moduleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  gradesContainer: {
    padding: 30,
    backgroundColor: "#E1EBEE",
    marginTop: 10,
    alignItems: "center",
    borderRadius: 15,
  },
  gradesHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  saveButtonContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  gradeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  gradeLabel: {
    width: 120,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    height: 35,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
  },
  headingbox: {
    padding: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    // shadowColor: '#5A5A5A',
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "flex-start",
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2b4e96",
    textAlign: "center",
    textAlign: "left",
  },
});

export default LecturerGradesPage;
