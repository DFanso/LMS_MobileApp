import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, NavigationContainer, BackHandler } from 'react-native';
import ModulesPage from './modules'
import GradesPage from './grades'
// import BottomTabNavigator from './bottomNav';
import TimeTableScreen from './timetable'
import StudentProfileScreen from './studentProfile'



const StudentHomePage = () => {
    const [page, setPage] = useState('StudentHomePage');

    const handleButtonPress = (buttonName) => {
        setPage(buttonName);
    };

    useEffect(() => {
        const backAction = () => {
            if (page !== 'StudentHomePage') {
                setPage('StudentHomePage');
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
            {page === 'StudentHomePage' ? (
                <View style={styles.container}>

                    <View style={styles.headingbox}>
                        <Text style={styles.welcomeText}>Student Home Page</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('ModulesPage')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets//module.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Modules</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('GradesPage')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets//marks.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Grades</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('timetablescreen')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets//schedule.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>Time Table</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('studentprofilescreen ')}>
                        <View style={styles.row}>
                            <ImageBackground
                                source={require('../assets//profile.jpg')}
                                style={styles.box}
                                imageStyle={styles.backgroundImage}
                            >
                                <Text style={styles.heading}>User profile</Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>

                    {/* <NavigationContainer>
                        <BottomTabNavigator />
                    </NavigationContainer> */}
                </View>

            ) : page === 'ModulesPage' ? (
                <ModulesPage onHomePress={() => setPage('StudentHomePage')} />
            ) : page === 'GradesPage' ? (
                <GradesPage onHomePress={() => setPage('StudentHomePage')} />
            ) : page === 'timetablescreen' ? (
                <TimeTableScreen onHomePress={() => setPage('StudentHomePage')} />
            ) : (
                <StudentProfileScreen onHomePress={() => setPage('StudentHomePage')} />
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

        borderWidth: 2, // Add border width
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
        backgroundColor: '#6ca1f1', // Semi-transparent background color for the heading
        padding: 10,

    },


    headingbox: {
        padding: 10,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        // shadowColor: '#5A5A5A',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
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

export default StudentHomePage;
