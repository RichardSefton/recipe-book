import { SafeAreaView } from 'react-native';
import { styles } from './styles';

import { RecipeList } from "../components/recipelist";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <RecipeList 
                navigation={navigation}
            />
        </SafeAreaView>
    );
};

export default Home;
