import { useMemo, useContext } from "react";
import { View, Button } from "react-native";
import { menuStyle } from './styles'
import { DatabaseContext, openDb, createTables } from '../../datastore';

const Menu = ({ children }) => {
    //return true if in development mode
    const development = useMemo(() => {
        return false
        return __DEV__;
    }, []);

    const { conn, setConn } = useContext(DatabaseContext);

    const refreshDatabase = () => {
        conn.closeAsync();
        conn.deleteAsync();
        const newConn = openDb();
        setConn(newConn);
        createTables(newConn).catch((error) => console.error(error));
    };

    return (
        <View style={menuStyle.bar}>
            {development && (
                <Button
                    onPress={refreshDatabase}
                    title="Refresh Database"
                />
            )}
            {children}
        </View>
    );
};

export default Menu;