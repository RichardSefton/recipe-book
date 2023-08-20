import { useState } from 'react';
import { Animated, Text, Image } from "react-native";
import MenuButton from "./MenuButton";
import { buttonStyle, buttonStylePressed } from "./styles";
import { buttonImages } from './buttonImages';

const LargeButton = ({ text = false, useImage=false, image=buttonImages.SAVE, handlePressed }) => {    
    const [pressed, setPressed] = useState(false);

    return (
        <MenuButton
            pressAction={handlePressed}
            pressed={pressed}
            setPressed={setPressed}
        >
            {!!text && (
                <Text
                    style={
                        pressed
                            ? buttonStylePressed.buttonLargeText
                            : buttonStyle.buttonLargeText
                    }
                >
                    {text}
                </Text>
            )}
            {!!useImage && (
                <Image
                    style={
                        pressed
                            ? buttonStylePressed.buttonLargeImage
                            : buttonStyle.buttonLargeImage
                    }
                    source={image.uri}
                />
            )}
        </MenuButton>
    );
};

export default LargeButton;
