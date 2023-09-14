import { useMemo, useState } from 'react';
import { View, Text, Image, Platform, ScrollView, Pressable } from 'react-native';
import { recipeImageStyles as styles } from "./styles";
import * as ImagePicker from 'expo-image-picker';
import { connect, useDispatch } from 'react-redux';
import {
    addRecipeImage,
    insertRecipeImage,
} from "../../redux/recipeSlice/slice";
import { RectangleButton } from '../buttons';

const RecipeImages = ({ images, isNewRecipe }) => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);

    const shouldDisplayImages = useMemo(() => !!images?.length, [images]);

    const pickImage = async () => {
        //request permission to access the user's media library
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                //if permission is not granted, alert the user
                alert('Sorry, we need camera roll permissions to make this work!');
            } else {
                //if permission is granted, open the image picker
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    // allowsEditing: true, //not allowed with multiselection
                    allowsMultipleSelection: true,
                    base64: true,
                    cameraType: ImagePicker.CameraType.back,
                    quality: 1,
                });

                result?.assets?.forEach((img) =>
                    isNewRecipe ? dispatch(addRecipeImage(img.base64)) : dispatch(insertRecipeImage(img.base64))
                );

            }
        }
    };

    const openCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            //if permission is not granted, alert the user
            alert('Sorry, we need camera permissions to make this work!');
        } else {
            //if permission is granted, open the image picker
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                base64: true,
                cameraType: ImagePicker.CameraType.back,
                quality: 1,
            });

            result?.assets?.forEach(img => 
                isNewRecipe ? dispatch(addRecipeImage(img.base64)) : dispatch(insertRecipeImage(img.base64))
            );
        }
    };

    return (
        // <View style={styles.container}>
        <>
            <View style={styles.buttonsContainer}>
                <RectangleButton pressAction={pickImage} style={styles.button}>
                    <Text style={styles.buttonText}>Choose Images</Text>
                </RectangleButton>
                <RectangleButton pressAction={openCamera} style={styles.button}>
                    <Text style={styles.buttonText}>Take Photo</Text>
                </RectangleButton>
            </View>
            {shouldDisplayImages && (
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.imagesContainer}
                    scrollEnabled={true} 
                >
                        {images.map((img) => (
                            <Pressable key={img.id} onPress={() => setSelectedImage(img)}>
                                <Image
                                    source={{ uri: `data:image/png;base64,${img.base64}` }}
                                    style={styles.image}
                                />
                            </Pressable>
                        ))}
                </ScrollView>
            )}
            {selectedImage && (
                <View style={styles.selectedImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${selectedImage.base64}` }} style={styles.selectedImage} />
                </View>
            )}
        </>
        // </View>
    );
};

export default connect(({ recipeSlice }) => ({
    images: recipeSlice.recipe.images,
}))(RecipeImages);