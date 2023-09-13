import { useState, useRef, useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import { RectangleButton as Button } from "../buttons";
import { connect, useDispatch } from "react-redux";
import { cancelEditIngredient, saveEditIngredient } from "../../redux/recipeSlice/slice";
import {
    ingredientsFormStyles as styles,
    recipeFormStyles as recipeStyles,
} from "./styles";
import { uoms } from "./uoms";
import SelectDropdown from "react-native-select-dropdown";

const EditIngredientsForm = ({ activeIngredient }) => {
    const [ingredient, setIngredient] = useState(activeIngredient.ingredient || "");
    const [qty, setQty] = useState(activeIngredient.quantity || "");
    const [uom, setUom] = useState(activeIngredient.uom || "");
    const dropdownRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setIngredient("");
            setQty("");
            setUom("");
            if (dropdownRef.current) dropdownRef.current.reset();
        };
    }, []);

    const handleUpdateIngredient = () => {
        dispatch(saveEditIngredient({ ...activeIngredient, ingredient: ingredient, quantity: qty, uom: uom }));
    };

    const handleCancelUpdateIngredient = () => {
        dispatch(cancelEditIngredient());
    };

    return (
        <View style={styles.ingredientsFormContainer}>
            <TextInput
                style={[recipeStyles.textInput, styles.textInput]}
                onChange={(e) => setIngredient(e.nativeEvent.text)}
                value={ingredient}
                placeholder="Ingredient"
            />
            <View style={styles.qtyContainer}>
                <TextInput
                    style={styles.qtyTextInput}
                    onChange={(e) => setQty(e.nativeEvent.text)}
                    value={typeof qty === 'string' ? qty : qty.toString()}
                    placeholder="Quantity"
                    inputMode="numeric"
                />
                <SelectDropdown
                    ref={dropdownRef}
                    dropdownStyle={styles.uomDropdown}
                    defaultValue={uoms.find(u => u.uom === uom)}
                    buttonStyle={styles.uomButton}
                    data={uoms}
                    onSelect={(selectedItem, index) => {
                        setUom(selectedItem.uom);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.label;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.label;
                    }}
                />
            </View>
            <View style={styles.editIngredientButtonContainer}>
                <Button pressAction={handleUpdateIngredient}>
                    <Text style={styles.addIngredientButtonText}>
                        Save Changes
                    </Text>
                </Button>
            </View>
            <View style={styles.deleteIngredientButtonContainer}>
                <Button pressAction={handleCancelUpdateIngredient}>
                    <Text style={styles.addIngredientButtonText}>
                        Cancel Changes
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    activeIngredient: recipeSlice.active.ingredient,
}))(EditIngredientsForm);
