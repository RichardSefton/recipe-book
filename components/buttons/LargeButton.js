import { useState } from 'react';
import { Animated, Text, View } from "react-native";
import MenuButton from "./MenuButton";
import { buttonStyle, buttonStylePressed } from "./styles";

const LargeButton = ({ text, handlePressed }) => {    
    const [pressed, setPressed] = useState(false);

    return (
        <MenuButton
            pressAction={handlePressed}
            pressed={pressed}
            setPressed={setPressed}
        >
            <Text style={pressed ? buttonStylePressed.buttonLargeText : buttonStyle.buttonLargeText} >{text}</Text>
        </MenuButton>
    );
};

export default LargeButton;
