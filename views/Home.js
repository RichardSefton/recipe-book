import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Menu } from "../components/menubar";
import { LargeButton } from "../components/buttons";
import { RecipeList } from "../components/recipelist";

const Home = ({ navigation }) => {
    const handleMainPress = () => {
        console.log("Main button pressed");
    };

    return (
        <SafeAreaView style={styles.container}>
            <RecipeList 
                navigation={navigation}
            />
            <Menu>
                <LargeButton text="+" handlePressed={handleMainPress} />
            </Menu>
        </SafeAreaView>
    );
};

export default Home;
