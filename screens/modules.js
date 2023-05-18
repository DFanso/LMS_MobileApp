import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";


const ModulesPage = ({ onHomePress }) => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [modules, setModules] = useState([]);
  const [lectureMaterials, setLectureMaterials] = useState([]);

  const handleModuleClick = async (module) => {
    setSelectedModule(module);
    await getLectureMaterials(module.name);
  };
  const downloadFile = async (url) => {
    // Check if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the link
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  const getLectureMaterials = async (moduleName) => {
    console.log(moduleName);
    try {
      const jwtToken = await AsyncStorage.getItem("jwt");
      const response = await axios.post(
        `http://192.168.1.5:3000/api/assignment/student`,
        {
          moduleName: moduleName,
        },

        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      setLectureMaterials(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failed to load lecture materials",
        "An error occurred while trying to load the lecture materials.",
        [{ text: "OK" }]
      );
    }
  };

  useEffect(() => {
    const getModules = async () => {
      try {
        const jwtToken = await AsyncStorage.getItem("jwt"); // get jwt token from AsyncStorage

        const response = await axios.get(
          "http://192.168.1.5:3000/api/lecture-modules/student",
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        setModules(response.data);
      } catch (error) {
        console.log(error);
        Alert.alert(
          "Failed to load modules",
          "An error occurred while trying to load the modules.",
          [{ text: "OK" }]
        );
      }
    };
    getModules();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={onHomePress}
      >
        <FontAwesome name="home" size={24} color="#4169e1" />
      </TouchableOpacity>

      <View style={styles.headingbox}>
        <Text style={styles.welcomeText}>Modules & Lecture Notes</Text>
      </View>

      {modules.map((module, index) => (
        <TouchableOpacity
          key={index} // Always provide a unique key when rendering a list
          style={[
            styles.moduleButton,
            selectedModule === module._id && styles.selectedModuleButton,
          ]}
          onPress={() => handleModuleClick(module)}
        >
          <Text style={styles.moduleText}>{module.name}</Text>
        </TouchableOpacity>
      ))}

      {selectedModule && lectureMaterials.length > 0 && (
        <View style={styles.lectureMaterialsContainer}>
          <Text style={styles.lectureMaterialsHeading}>Lecture Materials</Text>
          {lectureMaterials.map((material, index) => (
            <View key={index} style={styles.lectureNoteButton}>
              <FontAwesome name="file-text-o" size={20} color="#4169e1" />
              <Text style={styles.lectureNoteText}>{material.title}</Text>
              <TouchableOpacity onPress={() => downloadFile(material.filePath)}>
                <FontAwesome name="download" size={20} color="#4169e1" />
              </TouchableOpacity>
            </View>
          ))}
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  moduleButton: {
    // backgroundColor: '#E8E8E8',
    backgroundColor: "#4169e1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    height: 80,
    width: "90%",
    justifyContent: "center", // Align the content vertically centered
  },
  selectedModuleButton: {
    backgroundColor: "#2b4e96",
  },
  moduleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center", // Align the text vertically centered
    color: "#FFFFFF",
  },
  lectureMaterialsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  lectureMaterialsHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    padding: 10,
    backgroundColor: "#2b4e96",
    // shadowColor: '#5A5A5A',
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  lectureNoteButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  lectureNoteText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#2b4e96",
    fontWeight: "bold",
  },
  headingbox: {
    marginTop: 25,
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
  lectureNoteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "45%",
  },
  homeButton: {
    position: 'absolute',
    top: 30,
    left: 15,
    padding: 10,
  },
});

export default ModulesPage;
