import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Menu } from './components/menubar';
import { LargeButton } from './components/buttons';

export default function App() {

    const handleMainPress = () => {
        console.log("Main button pressed");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app</Text>
            <Menu>
                <LargeButton text="+" handlePressed={handleMainPress} />
            </Menu>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
