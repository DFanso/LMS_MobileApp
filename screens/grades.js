import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GradesPage = ({ onHomePress }) => {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [grades, setGrades] = useState(null);

  useEffect(() => {
    const getModules = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt");
        const response = await axios.get(
          "http://192.168.1.5:3000/api/lecture-modules/student",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setModules(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getModules();
  }, []);

  useEffect(() => {
    const fetchResult = async () => {
      const moduleName = selectedModule.name;
      try {
        const token = await AsyncStorage.getItem("jwt");
        const response = await axios.get(
          "http://192.168.1.5:3000/api/student/fetchResult",
          {
            params: { moduleName: moduleName },
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response.data.results);
        setGrades(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedModule) {
      fetchResult();
    }
  }, [selectedModule]);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={onHomePress}
      >
        <FontAwesome name="home" size={24} color="#4169e1" />
      </TouchableOpacity>
      <View style={styles.headingbox}>
        <Text style={styles.welcomeText}>Grades</Text>
      </View>

      {modules.map((module) => (
        <TouchableOpacity
          key={module._id}
          style={[
            styles.moduleButton,
            selectedModule === module && styles.selectedModuleButton,
          ]}
          onPress={() => handleModuleClick(module)}
        >
          <Text style={styles.moduleText}>{module.name}</Text>
        </TouchableOpacity>
      ))}

      {grades && (
        <View style={styles.gradesContainer}>
          <Text style={styles.gradesHeading}>Grades</Text>
          <View style={styles.gradeItemContainer}>
            <View style={styles.gradeItem}>
              <Text style={styles.gradeLabel}>Type:</Text>
              <Text style={styles.gradeValue}>{grades.Type}</Text>
            </View>
            <View style={styles.gradeItem}>
              <Text style={styles.gradeLabel}>Marks:</Text>
              <Text style={styles.gradeValue}>{grades.Marks}%</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 50, // Adjust the top padding to move the content to the top
  },
  headingbox: {
    marginTop: 25,
    padding: 10,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
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
  moduleButton: {
    backgroundColor: "#4169e1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    height: 80,
    width: "90%",
    justifyContent: "center",

    alignItems: "center",
  },
  selectedModuleButton: {
    backgroundColor: "#2b4e96",
  },
  moduleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "#FFFFFF",
  },
  gradesContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  gradesHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#2b4e96",
    elevation: 5,
    borderRadius: 10,
    color: "#fff",
  },
  gradeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  gradeLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: "#2b4e96",
    fontWeight: "bold",
  },
  gradeValue: {
    fontSize: 16,
    color: "#2b4e96",
  },
  gradeItemContainer: {
    backgroundColor: "#E1EBEE",
    padding: 12,
    borderRadius: 10,
    marginBottom: 5,
  },
  homeButton: {
    position: 'absolute',
    top: 30,
    left: 15,
    padding: 10,
  },
});

export default GradesPage;
