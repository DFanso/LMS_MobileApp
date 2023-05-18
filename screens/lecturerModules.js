import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LecturerModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [title, setTitle] = useState("");
  const [modules, setModules] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      const token = await AsyncStorage.getItem("jwt");
      const response = await axios.get(
        "http://192.168.8.132:3000/api/lecture-modules/getAllLectureModulesNoFilter",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setModules(response.data);
    };
    fetchModules();
  }, []);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setShowBox(true);
  };

  const handleDocumentPick = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*", // all files
      });

      if (res.type === "success") {
        let file = {
          uri: res.uri,
          name: res.name,
          type: "*/*",
        };

        setFile(file);
        setTitle(file.name);
      } else {
        console.log("User cancelled file picker");
      }
    } catch (err) {
      console.log("Unknown Error: ", err);
      throw err;
    }
  };

  const handleUpload = async () => {
    if (file === null) {
      Alert.alert("No file selected");
      return;
    }
    const token = await AsyncStorage.getItem("jwt");
    const formData = new FormData();

    // formData.append("Data", {
    //   title: title,
    //   batch: selectedModule.batch,
    //   degree: selectedModule.degree,
    //   moduleName: selectedModule.name,
    //   category: "assessment",
    // });
    formData.append("file", {
      uri: file.uri,
      type: file.type,
      name: file.name,
    });
    axios
      .post("http://192.168.8.132:3000/api/assignment", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        formData,
      })
      .then((resp) => {
        Alert.alert("File uploaded successfully");
      })
      .catch((err) => {
        console.error(err);
        Alert.alert("Failed to upload file");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.headingbox}>
          <Text style={styles.welcomeText}>Modules</Text>
        </View>

        {modules.map((module, index) => (
          <TouchableOpacity
            style={[
              styles.moduleButton,
              selectedModule === module.name && styles.selectedModuleButton,
            ]}
            onPress={() => handleModuleClick(module)}
            key={index}
          >
            <Text style={styles.moduleText}>{module.name}</Text>
          </TouchableOpacity>
        ))}

        {showBox && (
          <View style={styles.moduleBox}>
            <Text style={styles.boxHeading}>Upload Lecture Materials</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TouchableOpacity style={styles.input} onPress={handleDocumentPick}>
              <Text>{file ? file.name : "Click here to select a file"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.uploadButton, { backgroundColor: "#24a0ed" }]}
              onPress={handleUpload}
            >
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
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
    textAlign: "left",
  },
  moduleButton: {
    backgroundColor: "#4169e1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    height: 80,
    width: 330,
    justifyContent: "center",
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
  moduleBox: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    padding: 20,
  },
  boxHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#282828",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  headingbox: {
    padding: 10,
    marginBottom: 30,
    marginLeft: 10,
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
});

export default LecturerModulesPage;
