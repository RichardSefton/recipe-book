import { useState } from 'react';
import { Animated, View, Pressable } from "react-native";
import { buttonStyle, buttonStylePressed } from "./styles";

const MenuButton = ({ children, style, pressAction, pressed, setPressed }) => {

    return (
        <Animated.View style={style}>
            <Pressable 
                style={pressed ? buttonStylePressed.buttonLarge : buttonStyle.buttonLarge} 
                onPressIn={() => setPressed(true)} 
                onPress={pressAction}
                onPressOut={() => setPressed(false)}
            >
                {children}
            </Pressable>
        </Animated.View>
    );
}

export default MenuButton;