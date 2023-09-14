import { useMemo, useState } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { recipeImageStyles as styles } from "./styles";
import { connect } from 'react-redux';

const RecipeImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const shouldDisplayImages = useMemo(() => !!images?.length, [images]);

    return (
        <>
            {shouldDisplayImages && (
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.imagesContainer}
                    scrollEnabled={true}
                >
                    {images.map((img) => (
                        <Pressable
                            key={img.id}
                            onPress={() => setSelectedImage(img)}
                        >
                            <Image
                                source={{
                                    uri: `data:image/png;base64,${img.base64}`,
                                }}
                                style={styles.image}
                            />
                        </Pressable>
                    ))}
                </ScrollView>
            )}
            {selectedImage && (
                <View style={styles.selectedImageContainer}>
                    <Image
                        source={{ uri: `data:image/png;base64,${selectedImage.base64}` }}
                        style={styles.selectedImage}
                    />
                </View>
            )}
        </>
    );
};

export default connect(({ recipeSlice }) => ({ 
    images: recipeSlice.recipe.images, 
}))(RecipeImages);