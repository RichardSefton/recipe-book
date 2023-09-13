import { useMemo, useState } from "react";
import { Pressable } from "react-native";
import { buttonStyle, buttonStylePressed } from "./styles";

const RectangleButton = ({ children, pressAction = () => { }, style = {}, styles = [] }) => {
    const [pressed, setPressed] = useState(false);
    const additionalStyles = useMemo(() => {
        const retArr = [];
        if (!!(Object.keys(style).length)) {
            retArr.push(style);
        };
        if (!!(styles.length)) {
            retArr.push(...styles);
        };
        return retArr;
    }, [style, styles]);

    const pressableStyle = useMemo(() => pressed ? buttonStylePressed.buttonRectangle : buttonStyle.buttonRectangle, [pressed]);

    return (
        <Pressable
            style={[
                pressableStyle,
                ...additionalStyles
            ]}
            onPressIn={() => setPressed(true)}
            onPress={pressAction}
            onPressOut={() => setPressed(false)}
        >
            {children}
        </Pressable>
    );
};

export default RectangleButton;