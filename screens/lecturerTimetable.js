import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";

const LecturerTimeTableScreen = ({ onHomePress }) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      const token = await AsyncStorage.getItem("jwt");
      const response = await axios.get(
        "http://192.168.1.5:3000/api/lecture-schedules/filterByLecturer",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLectures(response.data);
    };
    fetchLectures();
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
        <Text style={styles.welcomeText}>Lecture Schedule</Text>
      </View>

      {lectures.map((lecture, index) => (
        <View style={styles.module} key={index}>
          <View style={[styles.moduleColor, { backgroundColor: "#87cefa" }]} />
          <View style={styles.moduleDetails}>
            <Text style={styles.moduleName}>{lecture.lectureModules}</Text>
            <Text>Lecture Hall: {lecture.lectureHall}</Text>
            <Text>Lecturer Name: {lecture.lecturer}</Text>
            <Text>Start Time: {lecture.startTime}</Text>
            <Text>End Time: {lecture.endTime}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    paddingTop: 20,
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
    textAlign: "left",
  },
  module: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 15,
    padding: 10,
    backgroundColor: "#E1EBEE",
    elevation: 5,
    borderRadius: 10,
    width: 385,
  },
  moduleName: {
    fontSize: 17,
    textAlign: "left",
  },
  moduleDetails: {
    marginLeft: 10,
  },
  moduleColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  homeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
});

export default LecturerTimeTableScreen;
