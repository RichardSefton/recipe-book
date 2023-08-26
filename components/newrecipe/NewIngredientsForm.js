import { useState, useRef, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { ingredientsFormStyles as styles, recipeFormStyles as recipeStyles } from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { uoms } from './uoms';
import { RectangleButton as Button } from '../buttons';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../redux/recipeSlice/slice';

const NewIngredientsForm = ({ }) => {
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const [ingredient, setIngredient] = useState('');
    const [uom, setUom] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        //cleanup to reset the form when we leave the page
        return () => {
            setIngredient('');
            setQuantity('');
            setUom('');
            if (dropdownRef.current) dropdownRef.current.reset();
        }
    }, []);

    const handleAddIngredient = () => {
        if (!(!!ingredient) || !(!!quantity) || !(!!uom)) return;
        dispatch(addIngredient({ ingredient, quantity, uom }));
        setIngredient("");
        setQuantity("");
        setUom("");
        if (dropdownRef.current) dropdownRef.current.reset();
    };

    return (
        <View styles={styles.ingredientsFormContainer}>
            <TextInput
                style={[recipeStyles.textInput, styles.textInput]}
                onChange={(e) => setIngredient(e.nativeEvent.text)}
                value={ingredient}
                placeholder="Ingredient"
            />
            <View style={styles.qtyContainer}>
                <TextInput
                    style={styles.qtyTextInput}
                    onChange={(e) => setQuantity(e.nativeEvent.text)}
                    value={quantity}
                    placeholder="Quantity"
                    inputMode="numeric"
                />
                <SelectDropdown
                    ref={dropdownRef}
                    dropdownStyle={styles.uomDropdown}
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
            <View style={styles.buttonContainer}>
                <Button
                    pressAction={handleAddIngredient}
                >
                    <Text style={styles.addIngredientButtonText}>Add Ingredient</Text>
                </Button>
            </View>
        </View>
    );
};

export default NewIngredientsForm;