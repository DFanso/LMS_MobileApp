import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GradesPage = () => {
    const [selectedModule, setSelectedModule] = useState(null);

    const handleModuleClick = (module) => {
        setSelectedModule(module);
    };

    return (
        <View style={styles.container}>

            <View style={styles.headingbox}>
                <Text style={styles.welcomeText}>Grades</Text>
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
                <View style={styles.gradesContainer}>
                    <Text style={styles.gradesHeading}>Grades</Text>
                    <View style={styles.gradeItemContainer}>
                        <View style={styles.gradeItem}>
                            <Text style={styles.gradeLabel}>Type:</Text>
                            <Text style={styles.gradeValue}>Presentation</Text>
                        </View>
                        <View style={styles.gradeItem}>
                            <Text style={styles.gradeLabel}>Marks:</Text>
                            <Text style={styles.gradeValue}>65%</Text>
                        </View>
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
    headingbox: {
        marginTop: 25,
        padding: 10,
        marginBottom: 30,
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
    moduleButton: {
        backgroundColor: '#4169e1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        height: 80,
        width: '90%',
        justifyContent: 'center',

        alignItems: 'center',
    },
    selectedModuleButton: {
        backgroundColor: '#2b4e96',
    },
    moduleText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#FFFFFF',
    },
    gradesContainer: {

        marginTop: 20,
        alignItems: 'center',
    },
    gradesHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#2b4e96',
        elevation: 5,
        borderRadius: 10,
        color: '#fff',
    },
    gradeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    gradeLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#2b4e96',
        fontWeight: 'bold',
    },
    gradeValue: {
        fontSize: 16,
        color: '#2b4e96'
    },
    gradeItemContainer: {
        backgroundColor: '#E1EBEE',
        padding: 12,
        borderRadius: 10,
        marginBottom: 5,
    }
});

export default GradesPage;

