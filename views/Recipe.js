import { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Recipe as RecipeComponent, IngredientsCard, StepsCard } from '../components/recipe';
import { loadRecipe } from '../redux/recipeSlice/slice';

const Recipe = ({ navigation, route }) => {
    const { recipe } = route.params;
    const dispatch = useDispatch();

    useFocusEffect(() => {
        dispatch(loadRecipe(recipe));
    });

    return (
        <SafeAreaView style={styles.modalContainer}>
            <IngredientsCard />
            <StepsCard />
            <RecipeComponent navigation={navigation} />
        </SafeAreaView>
    );
};

export default Recipe;