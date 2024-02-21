//// Success Message (CRUD)
import 'react-native-gesture-handler';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';

import {
  MD3LightTheme as DefaultTheme,
  Button,
  Provider,
  PaperProvider,
  Dialog,
  Portal,
  Menu,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const StyledDialog = styled(Dialog);
const StyledImage = styled(Image);
const Styledmenu = styled(Menu);
//const StyledIcon = styled(Icon);

const Block42 = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

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
    <PaperProvider theme={theme}>
      <View>
        <StyledButton
          onPress={() => {
            setVisible(true);
          }}
          className={
            visible
              ? 'flex h-12 w-8/12 justify-center items-center self-center bg-blue-500 rounded-lg  mt-12 border-4 border-sky-300'
              : 'flex h-12 w-8/12 justify-center items-center self-center bg-blue-500 rounded-lg  mt-12'
          }>
          <StyledText className="text-gray-100 text-lg font-medium ml-2">
            Show success message
          </StyledText>
        </StyledButton>

        <Portal>
          <StyledDialog
            className="bg-white mb-96 w-11/12 self-center"
            theme={{colors: {primary: 'white'}}}
            visible={visible}
            onDismiss={hideDialog}>
            <Dialog.Content>
              <StyledView className="">
                <StyledView className="flex-row justify-end">
                  <StyledButton
                    onPress={() => setVisible(false)}
                    className="items-end w-12">
                    <FontAwesome5 name="times" size={20} />
                  </StyledButton>
                </StyledView>
                <StyledView className="w-14 mb-4 h-14 bg-emerald-100 items-center justify-center rounded-full self-center">
                  <FontAwesome6 name="check" color="#4ade80" size={35} />
                </StyledView>
                <StyledText className="mb-4 text-lg font-semibold text-gray-900 text-center">
                  Successfully removed product.
                </StyledText>

                <StyledButton
                  onPress={() => {
                    setVisible(false);
                  }}
                  className={
                    !visible
                      ? 'flex h-10 w-28 justify-center items-center bg-blue-500 rounded-lg border-4 border-sky-300 self-center'
                      : 'flex h-10 w-28 justify-center items-center bg-blue-500 rounded-lg self-center'
                  }>
                  <StyledText className="text-gray-100 text-lg font-medium ml-2">
                    Continue
                  </StyledText>
                </StyledButton>
              </StyledView>
            </Dialog.Content>
          </StyledDialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default Block42;
