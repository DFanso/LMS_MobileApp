import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const LecturerModulesPage = () => {
    const [selectedModule, setSelectedModule] = useState(null);
    const [showBox, setShowBox] = useState(false);
    const [title, setTitle] = useState('');
    const [batch, setBatch] = useState('');
    const [degree, setDegree] = useState('');
    const [moduleName, setModuleName] = useState('');
    const [path, setPath] = useState('');



    const handleModuleClick = (module) => {
        setSelectedModule(module);
        setShowBox(true);
    };

    const handleUpload = () => {
        // Handle the upload logic here
        console.log('Title:', title);
        console.log('Batch:', batch);
        console.log('Degree:', degree);
        console.log('Module Name:', moduleName);
        console.log('Path:', path);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <View style={styles.headingbox}>
                    <Text style={styles.welcomeText}>Modules</Text>
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

                {showBox && (
                    <View style={styles.moduleBox}>
                        <Text style={styles.boxHeading}>Upload Lecture Materials</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            value={title}
                            onChangeText={setTitle}
                        />
                        <Picker
                            style={styles.input}
                            selectedValue={batch}
                            onValueChange={(itemValue) => setBatch(itemValue)}
                        >
                            <Picker.Item label="Select Batch" value="" />
                            <Picker.Item label="20.1" value="20.1" />
                            <Picker.Item label="20.3" value="20.3" />
                            <Picker.Item label="21.1" value="21.1" />
                        </Picker>
                        <Picker
                            style={styles.input}
                            selectedValue={degree}
                            onValueChange={(itemValue) => setDegree(itemValue)}
                        >
                            <Picker.Item label="Select Degree" value="" />
                            <Picker.Item
                                label="Bsc. Software Engineering (PLY)"
                                value="Bsc. Software Engineering (PLY)"
                            />
                            <Picker.Item
                                label="Bsc. Network Engineering"
                                value="Bsc. Network Engineering"
                            />
                            <Picker.Item
                                label="Bsc. CyberSecurity (PLY)"
                                value="Bsc. CyberSecurity (PLY)"
                            />
                        </Picker>
                        <Picker
                            style={styles.input}
                            selectedValue={moduleName}
                            onValueChange={(itemValue) => setModuleName(itemValue)}
                        >
                            <Picker.Item label="Select Module Name" value="" />
                            <Picker.Item label="Computing Group Project" value="Computing Group Project" />
                            <Picker.Item label="Mobile Application Development" value="Mobile Application Development" />
                            <Picker.Item label="Internet of Things" value="Internet of Things" />
                        </Picker>
                        <TextInput
                            style={styles.input}
                            placeholder="Path"
                            value={path}
                            onChangeText={setPath}
                        />
                        <TouchableOpacity
                            style={[styles.uploadButton, { backgroundColor: '#24a0ed' }]}
                            onPress={handleUpload}
                        >
                            <Text style={styles.uploadButtonText}>Upload</Text>
                        </TouchableOpacity>
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
        textAlign: 'left',
    },
    moduleButton: {
        backgroundColor: '#4169e1',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
        height: 80,
        width: 330,
        justifyContent: 'center',
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
    moduleBox: {

        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 10,
        padding: 20,

    },
    boxHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#282828',
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,

    },
    uploadButton: {
        backgroundColor: '#000000',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    uploadButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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
        textAlign: 'center',
        textAlign: 'left',

    },
});

export default LecturerModulesPage;