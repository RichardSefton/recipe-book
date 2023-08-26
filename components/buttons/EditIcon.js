import { Pressable, Image } from 'react-native';
import { buttonImages } from './buttonImages';
import { editIconStyles as styles } from './styles';

const EditIcon = ({ handleClick }) => {
    return (
        <Pressable 
            onPress={handleClick}
            style={styles.container}
        >
            <Image source={buttonImages.EDIT.uri} style={styles.image} />
        </Pressable>
    );
};

export default EditIcon;