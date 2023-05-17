import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StudentProfileScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.headingbox}>
                <Text style={styles.welcomeText}>Student profile</Text>
            </View>


            <View style={styles.profileInfo}>
                <Icon name="person" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>John Doe</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="confirmation-number" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Student ID:</Text>
                <Text style={styles.value}>123456789</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="credit-card" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>NIC:</Text>
                <Text style={styles.value}>1234567890123</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="email" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>johndoe@example.com</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="phone" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>1234567890</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="home" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Address:</Text>
                <Text style={styles.value}>123 Main St, City, Country</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="cake" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Date of Birth:</Text>
                <Text style={styles.value}>January 1, 2000</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="school" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Degree:</Text>
                <Text style={styles.value}>Computer Science</Text>
            </View>
            <View style={styles.profileInfo}>
                <Icon name="people" size={20} color="black" style={styles.icon} />
                <Text style={styles.label}>Batch:</Text>
                <Text style={styles.value}>20.1</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -35,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items to the left
        backgroundColor: '#ffffff',
        paddingHorizontal: 20, // Add horizontal padding for better alignment
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left', // Align heading to the left
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

        padding: 10,
        borderRadius: 10,
        backgroundColor: '#4B9CD3',
        elevation: 5,
        width: 370,
    },
    icon: {
        marginRight: 10,
        color: '#FFFFFF',
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        textAlign: 'left', // Align label to the left
    },
    value: {
        fontSize: 18,
        color: '#E0E0E0',
        textAlign: 'left', // Align value to the left
    },
    headingbox: {
        padding: 10,
        marginBottom: 30,
        marginLeft: 5,
        marginRight: 20,
        marginTop: -35,
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

export default StudentProfileScreen;

