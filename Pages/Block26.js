//// Read Drawers (CRUD)
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styled} from 'nativewind';

import {Drawer} from 'react-native-drawer-layout';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);

const Block26 = () => {
  const [open, setOpen] = React.useState(false);
  const [edit, setedit] = useState(false);

  const [dele, setdele] = useState(false);

  return (
    <Drawer
      open={open}
      drawerType="slide"
      swipeEdgeWidth={20}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <StyledView className="flex py-8 pl-2 pr-3 ">
            <StyledView className="flex-row justify-between">
              <StyledText className="text-xl font-semibold text-gray-900 mb-1">
                Apple iMac 25
              </StyledText>
              <StyledButton>
                <FontAwesome5 name="times" size={20} />
              </StyledButton>
            </StyledView>

            <StyledText className="text-xl font-extrabold text-gray-900 mb-2">
              $2999
            </StyledText>

            <StyledText className="text-xl font-semibold text-gray-900 mb-2">
              Details
            </StyledText>

            <StyledText className="text-xl font-light text-gray-400 mb-4">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </StyledText>

            <StyledView className="flex">
              <StyledView>
                <StyledText className="text-xl font-semibold text-gray-900 mb-2">
                  Category
                </StyledText>
                <StyledText className="text-xl font-light text-gray-400 mb-2">
                  Electronics/PC
                </StyledText>
              </StyledView>

              <StyledView className="flex-row justify-between mt-3">
                <StyledButton
                  onPress={() => {
                    setedit(true);
                    setdele(false);
                  }}
                  className={
                    edit
                      ? 'bg-blue-600 flex-row w-32 py-2 items-center justify-center h-12 rounded-lg border-4 border-sky-400'
                      : 'bg-blue-600 flex-row w-32 py-2 items-center justify-center h-12 rounded-lg'
                  }>
                  <FontAwesome5 name="edit" color="#fff" size={20} />
                  <StyledText className="text-white font-medium rounded-lg text-sm ml-1">
                    Edit
                  </StyledText>
                </StyledButton>
                <StyledButton
                  onPress={() => {
                    setedit(false);
                    setdele(true);
                  }}
                  className={
                    dele
                      ? 'bg-red-600 flex-row w-32 py-2 items-center justify-center h-12 rounded-lg border-4 border-pink-200'
                      : 'bg-red-600 flex-row w-32 py-2 items-center justify-center h-12 rounded-lg'
                  }>
                  <FontAwesome5 name="trash-alt" color="#fff" size={20} />
                  <StyledText className="text-white font-medium rounded-lg text-sm ml-1">
                    Delete
                  </StyledText>
                </StyledButton>
              </StyledView>
            </StyledView>
          </StyledView>
        );
      }}>
      <StyledButton
        className={
          open
            ? ''
            : 'flex w-32 justify-center h-11 bg-blue-500 self-center items-center mt-5 rounded-lg'
        }
        onPress={() => setOpen(prevOpen => !prevOpen)}>
        <StyledText className=" text-white text-base font-medium">
          Read product
        </StyledText>
      </StyledButton>
    </Drawer>
  );
};

export default Block26;
