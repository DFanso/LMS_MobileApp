import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, BackHandler, Alert } from 'react-native';
import LecturerHomePage from './lecturerHomePage'

const LecturerLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState('LecturerLogin');

    const handleButtonPress = (buttonName) => {
        setPage(buttonName);
    };

    useEffect(() => {
        const backAction = () => {
            if (page !== 'LecturerLogin') {
                setPage('LecturerLogin');
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

    const handleLogin = () => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const isValidEmail = emailPattern.test(username);

        if (!isValidEmail) {
            Alert.alert('Invalid Email!', 'Please enter a valid email address.', [
                { text: 'OK' }
            ]);
            return;
        }

        if (password.length < 8) {
            Alert.alert('Invalid Password!', 'Password should be at least 8 characters long.', [
                { text: 'OK' }
            ]);
            return;
        }
        else {
            setPage('LecturerHomePage');
        }

        // Placeholder logic for demonstration purposes
        // if (username === 'lec@gmail.com' && password === 'password123') {
        //     setPage('LecturerHomePage');
        // } else {
        //     console.log('Invalid username or password');
        // }
    };

    return (
        <>
            {page === 'LecturerLogin' ? (
                <View style={styles.container}>
                    <Text style={styles.heading}>Lecturer Login</Text>
                    <Image
                        source={require('../assets/lectLogin.jpg')}
                        style={styles.logo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
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
                <LecturerHomePage />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 50,

    },
});

export default LecturerLogin;
