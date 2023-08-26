import { useState } from 'react';
import { Animated, View, Pressable } from "react-native";
import { buttonStyle, buttonStylePressed } from "./styles";

const MenuButton = ({ children, style, pressAction, pressed, setPressed, small=false, disabled=false }) => {

    return (
        <Animated.View style={style}>
            <Pressable 
                style={[
                    pressed ? 
                        small ? buttonStylePressed.buttonSmall : buttonStylePressed.buttonLarge : 
                        small ? buttonStyle.buttonSmall : buttonStyle.buttonLarge,
                    disabled && buttonStyle.disabled]} 
                onPressIn={() => setPressed(true)} 
                onPress={pressAction}
                onPressOut={() => setPressed(false)}
                disabled={disabled}
            >
                {children}
            </Pressable>
        </Animated.View>
    );
}

export default MenuButton;