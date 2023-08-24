import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { RecipeList } from "../components/recipelist";
import { setNavigation } from '../redux/appSlice/slice';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        //this is the first page loaded. It will break deep linking if thats
        //a thing used later, but for now we will put the navigation object into 
        //the redux store so we can use it later.
        dispatch(setNavigation(navigation));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <RecipeList 
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

export default Home;
