import { useState, useMemo, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { createRecipe, toggleShowIngredients, toggleShowSteps, clearRecipe } from "../../redux/recipeSlice/slice";
import { View } from "react-native";
import { menuStyle } from './styles'
import { useNavigation } from "@react-navigation/native";
import { LargeButton, SmallButton, buttonImages } from "../buttons";

const Menu = ({ navigationRef, recipe }) => {
    //return true if in development mode
    const [route, setRoute] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        setRoute(navigationRef.current.getCurrentRoute().name);
        navigationRef.current.addListener('state', (e) => {
            setRoute(e.data?.state?.routes?.[e.data?.state?.index]?.name)
        });
    }, []);

    const recipeOkToSave = useMemo(() => {
        if (!recipe) return false;
        return (!!recipe?.name && !!recipe?.description && !!(recipe.ingredients?.length) && !!(recipe.steps?.length));
    }, [recipe]);

    const handleNewRecipe = () => {
        dispatch(clearRecipe());
        navigation.navigate("NewRecipe");
    };

    const openIngredientsCard = () => {
        dispatch(toggleShowIngredients());
    };
    const openStepsCard = () => {
        dispatch(toggleShowSteps());
    }

    const handleSaveRecipe = () => {
        dispatch(createRecipe())
            .then(() => navigation.navigate("RecipeList"))
            .catch((err) => console.error(err));
    };

    const navButtons = useMemo(() => {
        switch(route) {
            case 'NewRecipe': return (
                <>
                    <SmallButton
                        image={buttonImages.INGREDIENTS}
                        useImage={true}
                        handlePressed={openIngredientsCard}
                    />
                    <LargeButton
                        image={buttonImages.SAVE}
                        useImage={true}
                        handlePressed={handleSaveRecipe}
                        disabled={!recipeOkToSave}
                    />
                    <SmallButton
                        image={buttonImages.STEPS}
                        useImage={true}
                        handlePressed={openStepsCard}
                    />
                </>
            );
            case 'Recipe': return (
                <>
                    <SmallButton
                        image={buttonImages.INGREDIENTS}
                        useImage={true}
                        handlePressed={openIngredientsCard}
                    />
                    <SmallButton
                        image={buttonImages.STEPS}
                        useImage={true}
                        handlePressed={openStepsCard}
                    />
                </>
            );
            default: return (
                <>
                    <LargeButton text="+" handlePressed={handleNewRecipe} />
                </>
            );
        }
    }, [route, recipeOkToSave]);

    return (
        <View style={menuStyle.bar}>
            {navButtons}
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipe: recipeSlice.recipe,
}))(Menu);