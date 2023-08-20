import { useContext, useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { menuStyle } from './styles'
import { DatabaseContext } from '../../datastore';
import { useNavigation, useRoute } from "@react-navigation/native";
import { LargeButton, buttonImages } from "../buttons";

const Menu = ({ children, navigationRef }) => {
    //return true if in development mode
    const { conn, setConn } = useContext(DatabaseContext);
    const [route, setRoute] = useState('');

    const navigation = useNavigation();
    // const route = useRoute();

    useEffect(() => {
        setRoute(navigationRef.current.getCurrentRoute().name);
        navigationRef.current.addListener('state', (e) => {
            setRoute(e.data?.state?.routes?.[e.data?.state?.index]?.name)
        });
    }, []);

    const handleNewRecipe = () => {
        navigation.navigate("NewRecipe");
    };

    const handleSaveRecipe = () => {
        console.log("save recipe");
    };

    const navButtons = useMemo(() => {
        switch(route) {
            case 'NewRecipe': return (
                <>
                    <LargeButton imageUri={buttonImages.SAVE} useImage={true} handlePressed={handleSaveRecipe} />
                </>
            );
            default: return (
                <>
                    <LargeButton text="+" handlePressed={handleNewRecipe} />
                </>
            );
        }
    }, [route]);

    return (
        <View style={menuStyle.bar}>
            {navButtons}
        </View>
    );
};

export default Menu;