import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import StudentLogin from './screens/studentLogin'
import LecturerLogin from './screens/lecturerLogin'

const WelcomePage = ({ navigation }) => {
  const [page, setPage] = useState('WelcomePage');

  const handleButtonPress = (buttonName) => {
    setPage(buttonName);
  };

  useEffect(() => {
    const backAction = () => {
      if (page !== 'WelcomePage') {
        setPage('WelcomePage');
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [page]);


  return (
    <>
      {page === 'WelcomePage' ? (
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.welcomeText}>Learning Management System</Text>
          </View>
          <Image
            source={require('./assets/Riseup.png')}
            style={styles.logo}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('studentlogin')}>
              <Text style={styles.buttonText}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('lecturerlogin')}>
              <Text style={styles.buttonText}>Lecturer</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : page === 'studentlogin' ? (
        <StudentLogin />
      ) : (
        <LecturerLogin />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  box: {
    borderWidth: 2,
    borderColor: '#888',
    padding: 20,
    marginBottom: 80,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
    borderRadius: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1E90FF',    //#000000
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
