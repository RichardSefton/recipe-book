import { useMemo } from 'react';
import { Pressable, Image } from "react-native";
import { buttonImages } from "./buttonImages";
import { deleteIconStyles as styles } from "./styles";

const DeleteIcon = ({ handleClick, style={}, styles=[] }) => {
    const additionalStyles = useMemo(() => {
        const retArr = [];
        if (!!Object.keys(style).length) {
            retArr.push(style);
        }
        if (!!styles.length) {
            retArr.push(...styles);
        }
        return retArr;
    }, [style, styles]);

    return (
        <Pressable onPress={handleClick} style={[styles.container, ...additionalStyles]}>
            <Image source={buttonImages.DELETE.uri} style={styles.image} />
        </Pressable>
    );
};

export default DeleteIcon;
