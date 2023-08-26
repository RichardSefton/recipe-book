import { useState } from 'react';
import { Text, Image } from "react-native";
import MenuButton from "./MenuButton";
import { buttonStyle, buttonStylePressed } from "./styles";
import { buttonImages } from './buttonImages';

const LargeButton = ({ text = false, useImage=false, image=buttonImages.SAVE, handlePressed, disabled=false }) => {    
    const [pressed, setPressed] = useState(false);
    console.log('largebutton', { disabled });
    return (
        <MenuButton
            pressAction={handlePressed}
            pressed={pressed}
            setPressed={setPressed}
            disabled={disabled}
        >
            {!!text && (
                <Text
                    style={[
                        pressed
                            ? buttonStylePressed.buttonLargeText
                            : buttonStyle.buttonLargeText,
                        disabled && buttonStyle.textDisabled,
                    ]}
                >
                    {text}
                </Text>
            )}
            {!!useImage && (
                <Image
                    style={[
                        pressed
                            ? buttonStylePressed.buttonLargeImage
                            : buttonStyle.buttonLargeImage,
                        disabled && buttonStyle.imageDisabled,
                    ]}
                    source={image.uri}
                />
            )}
        </MenuButton>
    );
};

export default LargeButton;
