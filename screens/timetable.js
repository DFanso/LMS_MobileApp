import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeTableScreen = () => {
    const modules = {
        "Computing Group Project": {
            color: "#8fbc8f",
            lectureHall: "C2-001",
            lectureName: "Pramudya Thilakaratne",
            startTime: "9:00 AM",
            endTime: "12:00 PM",
        },
        "Software Development Tools and Practices": {
            color: "#ffb6c1",
            lectureHall: "C4-101",
            lectureName: "Pavithra Subashini",
            startTime: "1:00 PM",
            endTime: "3:00 PM",
        },
        "Internet of Things": {
            color: "#87cefa",
            lectureHall: "D1-201",
            lectureName: "Mr. Attanayake",
            startTime: "10:00 AM",
            endTime: "12:00 PM",
        },
        "Mobile Application Development": {
            color: "#F89880",
            lectureHall: "D1-201",
            lectureName: "Dr. Pulasthi Gunawardena",
            startTime: "10:00 AM",
            endTime: "12:00 PM",
        },
        // Add more module objects as needed
    };

    return (
        <View style={styles.container}>
            <View style={styles.headingbox}>
                <Text style={styles.welcomeText}>Lecture Schedule</Text>
            </View>

            {Object.entries(modules).map(([moduleName, module]) => (
                <View style={styles.module} key={moduleName}>
                    <View style={[styles.moduleColor, { backgroundColor: module.color }]} />
                    <View style={styles.moduleDetails}>
                        <Text style={styles.moduleName}>{moduleName}</Text>
                        <Text>Lecture Hall: {module.lectureHall}</Text>
                        <Text>Lecture Name: {module.lectureName}</Text>
                        <Text>Start Time: {module.startTime}</Text>
                        <Text>End Time: {module.endTime}</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        paddingTop: 20,
    },
    headingbox: {
        padding: 10,
        marginBottom: 30,
        marginLeft: 10,
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
        textAlign: 'left',
    },
    module: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 15,
        padding: 10,
        backgroundColor: '#E1EBEE',
        elevation: 5,
        borderRadius: 10,
        width: 385,

    },
    moduleName: {
        fontSize: 17,
        textAlign: 'left',
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
});

export default TimeTableScreen;
