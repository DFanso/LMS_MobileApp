import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const LecturerGradesPage = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [presentationGrade, setPresentationGrade] = useState('');
    const [examGrade, setExamGrade] = useState('');
    const [overallMarks, setOverallMarks] = useState('');
    const [studentId, setstudentId] = useState('');
    const [typeId, settypeId] = useState('');
    const [FacultyId, setFacultyId] = useState('');
    const [DegreeID, setDegreeID] = useState('');

    const handleModuleClick = (module) => {
        setSelectedModule(module);
    };

    const handleSave = () => {
        // TODO: Save the grades here
        const marksData = {
            studentId: '64635195a764bd468d9a2d12',
            BatchID: 'test',
            FacultyId: 'test',
            DegreeID: 'test',
            Presentation: presentationGrade,
            Exam: examGrade,
            'Overall Marks': overallMarks,
        };
        console.log('Marks Data:', marksData);

        // Reset the form fields
        setPresentationGrade('');
        setExamGrade('');
        setOverallMarks('');
        setstudentId('');
        settypeId('');
        setFacultyId('');
        setDegreeID('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <View style={styles.headingbox}>
                    <Text style={styles.welcomeText}>Grades</Text>
                </View>

                {/* Module selection */}
                <View style={styles.moduleSelection}>
                    <TouchableOpacity
                        style={[
                            styles.moduleButton,
                            selectedModule === 'Module A' && styles.selectedModuleButton,
                        ]}
                        onPress={() => handleModuleClick('Module A')}
                    >
                        <Text style={styles.moduleText}>software Development Tools and Practices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.moduleButton,
                            selectedModule === 'Module B' && styles.selectedModuleButton,
                        ]}
                        onPress={() => handleModuleClick('Module B')}
                    >
                        <Text style={styles.moduleText}>Computing Group Project</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.moduleButton,
                            selectedModule === 'Module C' && styles.selectedModuleButton,
                        ]}
                        onPress={() => handleModuleClick('Module C')}
                    >
                        <Text style={styles.moduleText}>Mobile Application Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.moduleButton,
                            selectedModule === 'Module D' && styles.selectedModuleButton,
                        ]}
                        onPress={() => handleModuleClick('Module D')}
                    >
                        <Text style={styles.moduleText}>internet Of Things</Text>
                    </TouchableOpacity>

                    {/* Add more module buttons as needed */}
                </View>

                {/* Grades input */}

                {selectedModule && (

                    <View style={styles.gradesContainer}>
                        <Text style={styles.gradesHeading}>Grades</Text>



                        <View style={styles.gradeItem}>
                            <Text style={styles.gradeLabel}>Student ID:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setstudentId}
                                value={studentId}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.gradeItem}>
                            <Text style={styles.gradeLabel}>Type:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={settypeId}
                                value={typeId}
                                keyboardType="default"
                            />
                        </View>


                        <View style={styles.gradeItem}>
                            <Text style={styles.gradeLabel}>Marks:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setExamGrade}
                                value={examGrade}
                                keyboardType="numeric"
                            />
                        </View>

                        {/* Add more input fields for other grades */}
                        <View style={[styles.saveButtonContainer, { backgroundColor: '#24a0ed', paddingLeft: 6, paddingRight: 6 }]} >
                            <Button title="Add" onPress={handleSave} />
                        </View>

                    </View>



                )}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
    },
    container: {
        // Remove flex: 1 from here if it exists
        marginTop: -15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    moduleSelection: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    moduleButton: {
        marginBottom: 10,
        backgroundColor: '#4169e1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedModuleButton: {
        backgroundColor: '#2b4e96',
    },
    moduleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    gradesContainer: {
        padding: 30,
        backgroundColor: '#E1EBEE',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 15,
    },
    gradesHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    saveButtonContainer: {
        marginTop: 10,
        alignItems: 'center',
        width: '100%',


    },
    gradeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    gradeLabel: {
        width: 120,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        height: 35,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 10,
    },
    headingbox: {
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
});

export default LecturerGradesPage;

