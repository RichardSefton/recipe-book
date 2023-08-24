import { useState } from "react";
import { Text, Image } from "react-native";
import MenuButton from "./MenuButton";
import { buttonStyle, buttonStylePressed } from "./styles";
import { buttonImages } from "./buttonImages";

const SmallButton = ({
    text = false,
    useImage = false,
    image = buttonImages.SAVE,
    handlePressed,
}) => {
    const [pressed, setPressed] = useState(false);
    return (
        <MenuButton
            pressAction={handlePressed}
            pressed={pressed}
            setPressed={setPressed}
            small={true}
        >
            {!!text && (
                <Text
                    style={
                        pressed
                            ? buttonStylePressed.buttonSmallText
                            : buttonStyle.buttonSmallText
                    }
                >
                    {text}
                </Text>
            )}
            {!!useImage && (
                <Image
                    style={
                        pressed
                            ? buttonStylePressed.buttonSmallImage
                            : buttonStyle.buttonSmallImage
                    }
                    source={image.uri}
                />
            )}
        </MenuButton>
    );
};

export default SmallButton;
