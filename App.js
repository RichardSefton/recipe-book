import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Recipe } from "./views";

export default function App() {
    const Stack = createNativeStackNavigator();

    const viewOptions = useMemo(() => ({
        headerShown: false,
    }), []);

    const modalOptions = useMemo(() => ({
        presentation: 'modal',
    }), []);

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home" 
            >
                <Stack.Group screenOptions={viewOptions}>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Group>
                {/* 
                    I think modal only works in ios.

                    I don't have an ios device and no intention on
                    getting one.
                    
                    Also don't have any apple products to run an emulator. 
                    Until Apple change their stance on ios development, 
                    I won't be able to test this.

                    At least in groups, they will behave differently on 
                    android devices. good enough. 
                */}
                <Stack.Group screenOptions={modalOptions}>
                    <Stack.Screen name="Recipe" component={Recipe} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
