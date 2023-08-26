import { Pressable, Image } from "react-native";
import { buttonImages } from "./buttonImages";
import { deleteIconStyles as styles } from "./styles";

const DeleteIcon = ({ handleClick }) => {
    return (
        <Pressable onPress={handleClick} style={styles.container}>
            <Image source={buttonImages.DELETE.uri} style={styles.image} />
        </Pressable>
    );
};

export default DeleteIcon;
