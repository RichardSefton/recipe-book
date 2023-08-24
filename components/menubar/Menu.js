import { useState, useMemo, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { createRecipe, toggleShowIngredients, toggleShowSteps } from "../../redux/recipeSlice/slice";
import { View } from "react-native";
import { menuStyle } from './styles'
import { useNavigation } from "@react-navigation/native";
import { LargeButton, SmallButton, buttonImages } from "../buttons";

const Menu = ({ navigationRef, showIngredients }) => {
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

    const handleNewRecipe = () => {
        navigation.navigate("NewRecipe");
    };

    const openNewIngredientsCard = () => {
        dispatch(toggleShowIngredients());
    };
    const openNewStepsCard = () => {
        dispatch(toggleShowSteps());
    }

    const handleSaveRecipe = () => {
        dispatch(createRecipe());
    };

    const navButtons = useMemo(() => {
        switch(route) {
            case 'NewRecipe': return (
                <>
                    <SmallButton
                        image={buttonImages.INGREDIENTS}
                        useImage={true}
                        handlePressed={openNewIngredientsCard}
                    />
                    <LargeButton
                        image={buttonImages.SAVE}
                        useImage={true}
                        handlePressed={handleSaveRecipe}
                    />
                    <SmallButton
                        image={buttonImages.STEPS}
                        useImage={true}
                        handlePressed={openNewStepsCard}
                    />
                </>
            );
            default: return (
                <>
                    <LargeButton text="+" handlePressed={handleNewRecipe} />
                </>
            );
        }
    }, [route]);

    return (
        <View style={menuStyle.bar}>
            {navButtons}
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    showIngredients: recipeSlice.showIngredients,
}))(Menu);