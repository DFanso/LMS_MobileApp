import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";

const LecturerProfileScreen = ({ onHomePress }) => {
  const [lecturer, setLecturer] = useState(null);

  useEffect(() => {
    const getLecturerDetails = async () => {
      try {
        const token = await AsyncStorage.getItem("jwt"); // Replace 'token' with your key
        const response = await axios.post(
          "http://192.168.1.5:3000/api/lecturer/getLecturerDetailsById",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLecturer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getLecturerDetails();
  }, []);

  if (!lecturer) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={onHomePress}
      >
        <FontAwesome name="home" size={24} color="#4169e1" />
      </TouchableOpacity>
      <View style={styles.headingbox}>
        <Text style={styles.welcomeText}>Lecturer profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Icon name="person" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{lecturer.name}</Text>
      </View>

      {/* Repeat this structure for each field */}
      <View style={styles.profileInfo}>
        <Icon
          name="confirmation-number"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.label}>Lecturer ID:</Text>
        <Text style={styles.value}>{lecturer.staffId}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="credit-card" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>NIC:</Text>
        <Text style={styles.value}>{lecturer.nic}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="email" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{lecturer.email}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="cake" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.value}>{lecturer.dob}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="phone" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{lecturer.phone}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="home" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{lecturer.address}</Text>
      </View>

      <View style={styles.profileInfo}>
        <Icon name="school" size={20} color="black" style={styles.icon} />
        <Text style={styles.label}>Faculty:</Text>
        <Text style={styles.value}>{lecturer.faculty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start", // Align items to the left
    backgroundColor: "#ffffff",
    paddingHorizontal: 20, // Add horizontal padding for better alignment
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left", // Align heading to the left
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#4B9CD3",
    elevation: 5,
    width: 370,
  },
  icon: {
    marginRight: 10,
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    textAlign: "left", // Align label to the left
  },
  value: {
    fontSize: 18,
    color: "#E0E0E0",
    textAlign: "left", // Align value to the left
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
  homeButton: {
    position: 'absolute',
    top: -40,
    left: 30,
    padding: 10,
  },
});

export default LecturerProfileScreen;
