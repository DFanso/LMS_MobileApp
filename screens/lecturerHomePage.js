import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, NavigationContainer, BackHandler } from 'react-native';
import LecturerModulesPage from './lecturerModules'
import LecturerGradesPage from './lecturerGrade'
// import BottomTabNavigator from './bottomNav';
import LecturerTimeTableScreen from './lecturerTimetable'
import LecturerProfileScreen from './lecturerProfile'


const LecturerHomePage = () => {
    const [page, setPage] = useState('LecturerHomePage');

    const handleButtonPress = (buttonName) => {
        setPage(buttonName);
    };

    useEffect(() => {
        const backAction = () => {
            if (page !== 'LecturerHomePage') {
                setPage('LecturerHomePage');
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
            {page === 'LecturerHomePage' ? (
                <View style={styles.container}>
                    <View style={styles.headingbox}>
                        <Text style={styles.welcomeText}>Lecturer Home Page</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('ModulesPage')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets/module.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Modules</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('LecturerGradesPage')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets/marks.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Grades</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('LecTimeTableScreen')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets/schedule.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Time Table</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('LecturerProfileScreen')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets/profile.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>User Profile</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                </View>
            ) : page === 'ModulesPage' ? (
                <LecturerModulesPage onHomePress={() => setPage('LecturerHomePage')} />
            ) : page === 'LecturerGradesPage' ? (
                <LecturerGradesPage onHomePress={() => setPage('LecturerHomePage')} />
            ) : page === 'LecTimeTableScreen' ? (
                <LecturerTimeTableScreen onHomePress={() => setPage('LecturerHomePage')} />
            ) : (
                <LecturerProfileScreen onHomePress={() => setPage('LecturerHomePage')} />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#0073cf',
    },
    box: {
        width: 200,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        borderRadius: 10,
    },
    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#6ca1f1',
        padding: 10,
    },
    headingbox: {
        padding: 10,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        alignSelf: 'flex-start',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2b4e96',
        textAlign: 'center',
        textAlign: 'left',
    },
});

export default LecturerHomePage;
