import { Pressable } from "react-native";
import { buttonStyle, buttonStylePressed } from "./styles";

const RectangleButton = ({ children, pressAction }) => (
    <Pressable
        style={
            ({pressed}) => pressed ? 
                buttonStylePressed.buttonRectangle
                : buttonStyle.buttonRectangle
        }
        onPress={pressAction}
    >
        {children}
    </Pressable>
);

export default RectangleButton;