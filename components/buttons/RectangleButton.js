import { useMemo } from "react";
import { Pressable } from "react-native";
import { buttonStyle, buttonStylePressed } from "./styles";

const RectangleButton = ({ children, pressAction = () => { }, style = {}, styles = [] }) => {
    const additionalStyles = useMemo(() => {
        const retArr = [];
        if (!!(Object.keys(style).length)) {
            retArr.push(style);
        };
        if (!!(styles.length)) {
            retArr.push(...styles);
        };
        return retArr;
    }, []);

    return (
        <Pressable
            style={[
                ({pressed}) => pressed ? 
                    buttonStylePressed.buttonRectangle
                    : buttonStyle.buttonRectangle,
                ...additionalStyles
            ]}
            onPress={pressAction}
        >
            {children}
        </Pressable>
    );
};

export default RectangleButton;