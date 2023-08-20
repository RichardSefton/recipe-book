import React, { useMemo, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecipeList, Recipe, NewRecipe } from "./views";
import { DatabaseContext, openDb, createTables } from './datastore';
import { AppStyle } from './styles';

export default function App() {
    const [dbConn, setDbConn] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(0);

    const Stack = createNativeStackNavigator();

    //memoize the options so that they don't get recreated
    //every time the component re-renders
    const viewOptions = useMemo(() => ({
        headerShown: false,
    }), []);
    const modalOptions = useMemo(() => ({
        presentation: 'modal',
    }), []);

    useEffect(() => {
        const conn = openDb();
        setLoadingStatus(50);
        setDbConn(conn);
        createTables(conn)
            .then(() => {
                setLoading(false);
                setLoadingStatus(100);
            })
            .catch(error => console.error(error));
    }, []);

    //To prevent the app from mounting the RecipeList on first load when the
    //database is not ready, we will show a loading screen. 
    //This will show a progress for loading so theres some feedback to the 
    //user if it takes a while...
    if (loading) 
        return (
            <SafeAreaView style={AppStyle.container}>
                <Text>Loading...</Text>
                <View style={AppStyle.progressBar}>
                    <View style={[AppStyle.progress, { width: `${loadingStatus}%` }]} />
                </View>
            </SafeAreaView>  
        );

    return (
        <DatabaseContext.Provider value={{ conn: dbConn, setConn: setDbConn }}>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="RecipeList" 
                >
                    <Stack.Group screenOptions={viewOptions}>
                        <Stack.Screen name="RecipeList" component={RecipeList} />
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
                        <Stack.Screen name="NewRecipe" component={NewRecipe} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </DatabaseContext.Provider>
    );
};
