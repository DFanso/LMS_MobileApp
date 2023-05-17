import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ModulesPage = () => {
    const [selectedModule, setSelectedModule] = useState(null);

    const handleModuleClick = (module) => {
        setSelectedModule(module);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headingbox}>
                <Text style={styles.welcomeText}>Modules & Lecture Notes</Text>
            </View>


            <TouchableOpacity
                style={[
                    styles.moduleButton,
                    selectedModule === 'computingGroupProject' && styles.selectedModuleButton,
                ]}
                onPress={() => handleModuleClick('computingGroupProject')}
            >
                <Text style={styles.moduleText}>Computing Group Project</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.moduleButton,
                    selectedModule === 'softwareDevelopmentTools' && styles.selectedModuleButton,
                ]}
                onPress={() => handleModuleClick('softwareDevelopmentTools')}
            >
                <Text style={styles.moduleText}>Software Development Tools and Practices</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.moduleButton,
                    selectedModule === 'internetOfThings' && styles.selectedModuleButton,
                ]}
                onPress={() => handleModuleClick('internetOfThings')}
            >
                <Text style={styles.moduleText}>Internet of Things</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.moduleButton,
                    selectedModule === 'mobileApplicationDevelopment' && styles.selectedModuleButton,
                ]}
                onPress={() => handleModuleClick('mobileApplicationDevelopment')}
            >
                <Text style={styles.moduleText}>Mobile Application Development</Text>
            </TouchableOpacity>


            {selectedModule && (
                <View style={styles.lectureMaterialsContainer}>
                    <Text style={styles.lectureMaterialsHeading}>Lecture Materials</Text>

                    <View style={styles.lectureNoteButton}>
                        <FontAwesome name="file-text-o" size={20} color="#4169e1" />
                        <Text style={styles.lectureNoteText}>Lecture Note 1</Text>
                        <FontAwesome name="download" size={20} color="#4169e1" />
                    </View>

                    <View style={styles.lectureNoteButton}>
                        <FontAwesome name="file-text-o" size={20} color="#4169e1" />
                        <Text style={styles.lectureNoteText}>Lecture Note 2</Text>
                        <FontAwesome name="download" size={20} color="#4169e1" />
                    </View>

                    <View style={styles.lectureNoteButton}>
                        <FontAwesome name="file-text-o" size={20} color="#4169e1" />
                        <Text style={styles.lectureNoteText}>Assignment 3</Text>
                        <FontAwesome name="download" size={20} color="#4169e1" />
                    </View>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 50, // Adjust the top padding to move the content to the top
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    moduleButton: {
        // backgroundColor: '#E8E8E8',
        backgroundColor: '#4169e1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        height: 80,
        width: '90%',
        justifyContent: 'center', // Align the content vertically centered
    },
    selectedModuleButton: {
        backgroundColor: '#2b4e96',
    },
    moduleText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center', // Align the text vertically centered
        color: '#FFFFFF',


    },
    lectureMaterialsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    lectureMaterialsHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        padding: 10,
        backgroundColor: '#2b4e96',
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    lectureNoteText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#2b4e96',
        fontWeight: 'bold',

    },
    headingbox: {
        marginTop: 25,
        padding: 10,
        marginBottom: 30,
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
    lectureNoteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '45%',
    },
});

export default ModulesPage;
