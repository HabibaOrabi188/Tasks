import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
//const Styledmenu = styled(Menu);
const StyledIcon = styled(Icon);

const Block3 = () => {
  const Drawer = createDrawerNavigator();

  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <StyledView className="flex h-screen px-4 py-4">
      <StyledButton>
        <StyledIcon name="list" size={20} />
      </StyledButton>
    </StyledView>
  );
};

export default Block3;
