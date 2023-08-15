import { View } from "react-native";
import { menuStyle } from './styles'

const Menu = ({ children }) => {

    
    return (
        <View style={menuStyle.bar} >
            {children}
        </View>        
    );
};

export default Menu;