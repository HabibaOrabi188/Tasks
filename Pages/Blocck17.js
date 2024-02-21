/// Read Modals (CRUD)
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

const Block17 = () => {
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
                    Apple iMac 27”
                  </StyledText>
                  <StyledButton onPress={hideModal} className="p-2">
                    <Ionicons name="close" size={20} />
                  </StyledButton>
                </StyledView>
                <StyledText className="text-lg text-gray-900 font-semibold">
                  $2999
                </StyledText>
                <StyledText className="text-base text-gray-900 font-semibold mt-4 mb-2">
                  Details
                </StyledText>

                <StyledText className="font-light text-gray-500 text-sm">
                  Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                  processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                  Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
                  storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
                </StyledText>

                <StyledText className="text-base text-gray-900 font-semibold mt-4 mb-2">
                  Category
                </StyledText>

                <StyledText className="font-light text-gray-500 text-sm">
                  Electronics/PC
                </StyledText>

                <StyledView className="flex-row mt-3">
                  <StyledButton
                    className={
                      edit
                        ? 'bg-blue-500 border-4 border-sky-200 px-5 py-2 mt-3 rounded-lg flex-row item-center justify-center'
                        : 'bg-blue-500 mt-3 px-5 py-2 rounded-lg flex-row item-center justify-center'
                    }
                    onPress={() => {
                      setdele(false);
                      setedit(true);
                      setprev(false);
                    }}>
                    <FontAwesome5 name="edit" color="#fff" size={20} />
                    <StyledText className="text-gray-100 text-base ml-1 font-medium  ">
                      Edit
                    </StyledText>
                  </StyledButton>

                  <StyledButton
                    className={
                      prev
                        ? 'bg-gray-100 border-4 border-gray-200 px-3 py-2 mt-3 rounded-lg flex-row item-center ml-2 '
                        : ' mt-3 border border-gray-200 px-3 py-2 rounded-lg flex-row item-center ml-2'
                    }
                    onPress={() => {
                      setdele(false);
                      setedit(false);
                      setprev(true);
                    }}>
                    <StyledText className="text-gray-800 text-base font-medium ">
                      Preview
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
                      setedit(false);
                      setprev(false);
                    }}>
                    <Feather name="trash-2" color="#fff" size={20} />
                    <StyledText className="text-gray-100 text-base font-medium ml-1 ">
                      Delete
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
            Show real Modal
          </StyledText>
        </StyledButton>
      </StyledView>
    </PaperProvider>
  );
};

export default Block17;
