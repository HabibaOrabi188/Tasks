//// Faceted Search Modals
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

const Block29 = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [check, setCheck] = useState([
    {
      value: 'Apple (56)',
      check: false,
    },
    {
      value: 'Fitbit (56)',
      check: false,
    },
    {
      value: 'Dell (56)',
      check: false,
    },
    {
      value: 'Asus (97)',
      check: true,
    },
    {
      value: 'Logitech (97)',
      check: true,
    },
    {
      value: 'MSI (97)',
      check: true,
    },
    {
      value: 'Bosch (176)',
      check: true,
    },
    {
      value: 'Sony (234)',
      check: false,
    },
    {
      value: 'Samsung (76)',
      check: true,
    },
    {
      value: 'Canon (49)',
      check: false,
    },
    {
      value: 'Microsoft (45)',
      check: false,
    },
    {
      value: 'Razor (49)',
      check: false,
    },
    {
      value: 'Emetec (16)',
      check: false,
    },
    {
      value: 'Nvidia (45)',
      check: false,
    },
    {
      value: 'HP (234)',
      check: false,
    },
    {
      value: 'BenQ (45)',
      check: false,
    },
    {
      value: 'Rockstar (49)',
      check: false,
    },
  ]);

  const [checkNum, setCheckNum] = useState(-1);

  const [apply, setApply] = useState(false);
  const [reset, setReset] = useState(false);

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
      <StyledView className="items-center ">
        <StyledButton
          onPress={showDialog}
          className={
            visible
              ? 'w-32 h-12 bg-blue-500 items-center justify-center mt-10 rounded-lg border-4 border-sky-300'
              : 'w-32 h-12 bg-blue-500 items-center justify-center mt-10 rounded-lg'
          }>
          <StyledText className="text-white">Toggle modal</StyledText>
        </StyledButton>

        <StyledView className="h-80 mb-5 ">
          <Portal>
            <StyledDialog
              theme={{colors: {primary: '#fff'}}}
              className="bg-white mb-56"
              visible={visible}
              onDismiss={hideDialog}>
              <Dialog.Content>
                <StyledView>
                  <StyledView className="flex-row justify-between items-center mb-3">
                    <StyledText className="text-xl font-normal text-gray-400">
                      Filter by category
                    </StyledText>
                    <StyledButton onPress={hideDialog}>
                      <AntDesign name="close" size={20} />
                    </StyledButton>
                  </StyledView>
                  <FlatList
                    contentContainerStyle={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                    // horizontal={true}
                    data={check}
                    renderItem={({item, index}) => {
                      return (
                        <StyledButton
                          onPress={() => {
                            let arr = check;
                            arr[index].check = !item.check;
                            setCheck(arr);
                            setCheckNum(index);
                          }}
                          className="flex flex-row items-center py-1.5">
                          <StyledView
                            className={
                              checkNum == index
                                ? 'flex h-6 w-6 border border-blue-500 rounded-md justify-center items-center'
                                : ''
                            }>
                            <StyledView
                              className={
                                item.check == true
                                  ? 'h-5 w-5 border rounded-md bg-blue-500 border-gray-200 justify-center items-center'
                                  : 'h-5 w-5 border rounded-md self-center bg-gray-100 border-gray-200 '
                              }>
                              {item.check ? (
                                <FontAwesome6 name="check" color={'#fff'} />
                              ) : null}
                            </StyledView>
                          </StyledView>
                          <StyledText
                            className={
                              item.check
                                ? 'text-gray-700 ml-1 text-sm w-24'
                                : checkNum == index
                                ? 'text-gray-700 ml-1 text-sm  w-24'
                                : 'text-sm text-gray-700 ml-1   w-24'
                            }>
                            {item.value}
                          </StyledText>
                        </StyledButton>
                      );
                    }}
                  />

                  <StyledView className="flex-row space-x-3 mt-6">
                    <StyledButton
                      onPress={() => {
                        setApply(true);
                        setReset(false);
                      }}
                      className={
                        apply
                          ? 'h-12 w-24 bg-blue-500 items-center justify-center rounded-lg border-4 border-sky-300'
                          : 'h-12 w-24 bg-blue-500 items-center justify-center rounded-lg'
                      }>
                      <StyledText className="text-white text-base ">
                        Apply
                      </StyledText>
                    </StyledButton>

                    <StyledButton
                      onPress={() => {
                        setReset(true);
                        setApply(false);
                      }}
                      className={
                        reset
                          ? 'h-12 w-24  items-center justify-center rounded-lg border-4 border-gray-300'
                          : 'h-12 w-24  items-center justify-center rounded-lg border border-gray-400'
                      }>
                      <StyledText className="text-gray-800 text-base ">
                        Reset
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </StyledView>
              </Dialog.Content>
            </StyledDialog>
          </Portal>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block29;
