//// Popups
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Button,
  Provider,
  PaperProvider,
  Dialog,
  Portal,
  Menu,
} from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const StyledDialog = styled(Dialog);
const StyledImage = styled(Image);
const Styledmenu = styled(Menu);
//const StyledIcon = styled(Icon);

const Block30 = () => {
  const [visible, setVisible] = React.useState(true);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [confirm, setconfirm] = useState(false);
  const [cancel, setcancel] = useState(false);
  const [line, setLine] = useState(false);

  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#e5e7eb',
    },
  };

  return (
    <PaperProvider>
      <StyledView>
        <StyledView className="h-80 mb-5 items-center">
          <Portal>
            <StyledDialog
              theme={{colors: {primary: '#fff'}}}
              className="bg-white mb-56 w-11/12 self-center"
              visible={visible}
              onDismiss={hideDialog}>
              <Dialog.Content>
                <StyledView>
                  <StyledText className="mb-3 text-2xl font-bold text-gray-900">
                    Privacy info
                  </StyledText>
                  <StyledText className="mb-3 text-base text-gray-400">
                    The backup created with this export functionnality may
                    contain some sensitive data. We suggest you to save this
                    archive in a securised location.
                  </StyledText>

                  <StyledButton
                    onPressOut={() => {
                      setLine(false);
                    }}
                    onPressIn={() => {
                      setLine(true);
                    }}>
                    <StyledText
                      className={
                        line
                          ? 'font-medium text-lg text-blue-500 mb-3 border-b border-blue-500 w-4/5'
                          : 'font-medium text-lg text-blue-500 mb-3'
                      }>
                      Learn more about privacy
                    </StyledText>
                  </StyledButton>

                  <StyledButton
                    onPress={() => {
                      setcancel(true);
                      setconfirm(false);
                      setVisible(false);
                    }}
                    className={
                      cancel
                        ? 'h-12 w-72  items-center justify-center rounded-lg border-4 border-blue-500 mb-3'
                        : 'h-12 w-72 items-center justify-center rounded-lg border border-gray-300 mb-3'
                    }>
                    <StyledText className="text-gray-500 text-base ">
                      Cancel
                    </StyledText>
                  </StyledButton>

                  <StyledButton
                    onPress={() => {
                      setconfirm(true);
                      setcancel(false);
                    }}
                    className={
                      confirm
                        ? 'h-12 w-72 bg-blue-500 items-center justify-center rounded-lg border-4 border-sky-300'
                        : 'h-12 w-72 bg-blue-500 items-center justify-center rounded-lg '
                    }>
                    <StyledText className="text-white text-base ">
                      Confirm
                    </StyledText>
                  </StyledButton>
                </StyledView>
              </Dialog.Content>
            </StyledDialog>
          </Portal>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block30;
