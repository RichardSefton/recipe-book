import { useRef, useEffect, useMemo } from 'react';
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeList, Recipe, NewRecipe, EditRecipe } from "./views";
import { AppStyle } from "./styles";
import { Menu } from "./components/menubar";
import { setDatabaseConnection, setLoading, setProgress } from "./redux/appSlice/slice";
import { useDispatch, connect } from 'react-redux';
import { openDb, createTables } from './datastore';

const Navigator = ({ loading, progress }) => {
    const Stack = createNativeStackNavigator();
    const navigationRef = useRef(null);
    const dispatch = useDispatch();

    //memoize the options so that they don't get recreated
    //every time the component re-renders
    const viewOptions = useMemo(
        () => ({
            headerShown: false,
        }),
        []
    );
    const modalOptions = useMemo(
        () => ({
            presentation: "modal",
        }),
        []
    );

    useEffect(() => {
        const conn = openDb();
        dispatch(setProgress(50));
        dispatch(setDatabaseConnection(conn));
        createTables(conn)
            .then(() => {
                dispatch(setProgress(100));
                //let someone see the loading finish
                setTimeout(() => {
                    dispatch(setLoading(false));
                }, 500);
            })
            .catch((error) => console.error(error));
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
                    <View
                        style={[
                            AppStyle.progress,
                            { width: `${progress}%` },
                        ]}
                    />
                </View>
            </SafeAreaView>
        );

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="RecipeList">
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
                    <Stack.Screen
                        name="NewRecipe"
                        component={NewRecipe}
                        options={{
                            headerTitle: "New Recipe",
                        }}
                    />
                    <Stack.Screen
                        name="EditRecipe"
                        component={EditRecipe}
                        options={{
                            headerTitle: "Edit Recipe",
                        }}
                    />
                </Stack.Group>
            </Stack.Navigator>
            <Menu navigationRef={navigationRef} />
        </NavigationContainer>
    );
};

export default connect(({ appSlice }) => ({
    loading: appSlice.loading,
    progress: appSlice.progress,
}))(Navigator);