import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import StudentHomePage from "./studentHome";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("StudentLogin");

  const handleButtonPress = (buttonName) => {
    setPage(buttonName);
  };

  useEffect(() => {
    const backAction = () => {
      if (page !== "StudentLogin") {
        setPage("StudentLogin");
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [page]);

  const handleLogin = async () => {
    if (password.length < 8) {
      Alert.alert(
        "Invalid Password!",
        "Password should be at least 8 characters long.",
        [{ text: "OK" }]
      );
      return;
    } else {
      // axios call for login
      try {
        const response = await axios.post(
          "http://192.168.1.5:3000/api/student/login",
          {
            username,
            password,
          }
        );

        const jwtToken = response.data.token;
        console.log(jwtToken);

        // Save token to AsyncStorage
        await AsyncStorage.setItem("jwt", jwtToken);

        setPage("studenthomepage");
      } catch (error) {
        // handling error
        console.log(error);
        Alert.alert(
          "Login Failed",
          "An error occurred while trying to login.",
          [{ text: "OK" }]
        );
      }
    }
  };

  return (
    <>
      {page === "StudentLogin" ? (
        <View style={styles.container}>
          <Text style={styles.heading}>Student Login</Text>
          <Image
            source={require("../assets/stuLogin.jpg")}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <StudentHomePage />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
});

export default StudentLogin;
