import { View, Text } from "react-native";
import { longPressStyle } from "./style";
import { RectangleButton } from "../buttons";

const LongPressActions = ({
    editAction=()=>{},
    deleteAction=()=>{},
    cancelAction=()=>{},
}) => (
    <View style={longPressStyle.container}>
        <View style={longPressStyle.buttonContainer}>
            <RectangleButton 
                style={longPressStyle.buttonDelete}
                pressAction={deleteAction}
            >
                <Text style={longPressStyle.buttonText}>Delete</Text>
            </RectangleButton>
        </View>
        <View style={longPressStyle.buttonContainer}>
            <RectangleButton 
                style={longPressStyle.buttonEdit}
                pressAction={editAction}
            >
                <Text style={longPressStyle.buttonText}>Edit</Text>
            </RectangleButton>
        </View>
        <View style={longPressStyle.buttonContainerSmall}>
            <RectangleButton
                style={longPressStyle.buttonCancel}
                pressAction={cancelAction}
            >
                <Text style={longPressStyle.buttonText}>Cancel</Text>
            </RectangleButton>
        </View>
    </View>
);

export default LongPressActions;