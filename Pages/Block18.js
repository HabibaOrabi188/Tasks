/// Delete Confirm (CRUD) >>>>>>>>>. second design
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
  Portal,
  Modal,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const StyledModal = styled(Modal);
const StyledImage = styled(Image);
//const StyledIcon = styled(Icon);

const Block18 = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [edit, setedit] = useState(false);

  const [prev, setprev] = useState(false);

  const [dele, setdele] = useState(false);

  return (
    <PaperProvider>
      <StyledView className="flex items-center">
        <Portal>
          <StyledModal
            className="absolute"
            contentContainerStyle={{}}
            visible={visible}
            onDismiss={hideModal}>
            <StyledView className="flex justify-start pb-14">
              <StyledView className=" basis-10/11 mb-14 mx-4 pb-9 bg-white rounded-b-xl justify-start pt-4 px-3">
                <StyledView className="flex-row items-center justify-between">
                  <StyledText className="text-lg text-gray-900 font-semibold">
                    Are you sure?
                  </StyledText>
                  <StyledButton onPress={hideModal} className="p-2">
                    <Ionicons name="close" size={20} />
                  </StyledButton>
                </StyledView>

                <StyledText className="font-light text-gray-500 text-lg">
                  You are about to delete the following 3 products, this cannot
                  be undone:
                </StyledText>

                <StyledView className="flex-row mt-3 items-center">
                  <MaterialIcons name="error" size={22} color="#ddd" />
                  <StyledText className="text-gray-500 text-lg ml-1">
                    Apple iMac 27”
                  </StyledText>
                </StyledView>

                <StyledView className="flex-row mt-3 items-center">
                  <MaterialIcons name="error" size={22} color="#ddd" />
                  <StyledText className=" text-gray-500 text-lg ml-1">
                    Magic Keyboard
                  </StyledText>
                </StyledView>

                <StyledView className="flex-row mt-3 items-center">
                  <MaterialIcons name="error" size={22} color="#ddd" />
                  <StyledText className=" text-gray-500 text-lg  ml-1">
                    Xbox Series X
                  </StyledText>
                </StyledView>

                <StyledView className="flex-row mt-3">
                  <StyledButton
                    className=" mt-3 border border-gray-200 px-3 py-2 rounded-lg flex-row item-center ml-2"
                    onPress={hideModal}>
                    <StyledText className="text-gray-400 text-base font-medium ">
                      No, cancel
                    </StyledText>
                  </StyledButton>

                  <StyledButton
                    className={
                      dele
                        ? 'bg-red-700 border-4 border-red-200 px-2 py-2 mt-3 rounded-lg flex-row item-center ml-6 '
                        : ' mt-3 bg-red-700 px-2 py-2 rounded-lg flex-row item-center ml-6'
                    }
                    onPress={() => {
                      setdele(true);
                    }}>
                    <Feather name="trash-2" color="#fff" size={20} />
                    <StyledText className="text-gray-100 text-base font-medium ml-1 ">
                      Yes, delete
                    </StyledText>
                  </StyledButton>
                </StyledView>
              </StyledView>
            </StyledView>
          </StyledModal>
        </Portal>

        <StyledButton
          className={
            visible
              ? 'bg-blue-500 border-4 border-sky-200 p-3 mt-12 rounded-lg'
              : 'bg-blue-500 mt-12 p-3 rounded-lg'
          }
          onPress={showModal}>
          <StyledText className="text-gray-100 font-medium ">
            how delete confirmation
          </StyledText>
        </StyledButton>
      </StyledView>
    </PaperProvider>
  );
};

export default Block18;
