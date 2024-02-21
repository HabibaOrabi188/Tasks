///Customer Logos
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6Pro';
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

const Block39 = () => {
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

  const [data, setdata] = useState([
    {
      name: 'airbnb',
      pressed: false,
      icon: 'airbnb',
    },
    {
      name: 'Google',
      pressed: false,
      icon: '',
    },
    {
      name: 'Microsoft',
      pressed: false,
      icon: 'microsoft',
    },
    {
      name: 'Spotify',
      pressed: false,
      icon: 'spotify',
    },
    {
      name: 'mailchimp',
      pressed: false,
      icon: 'mailchimp',
    },
    {
      name: 'Mashable',
      pressed: false,
      icon: '',
    },
  ]);

  const [Number, setNumber] = useState(-1);

  return (
    <StyledView className="flex h-full py-6 items-center">
      <StyledText className="text-3xl font-extrabold tracking-tight  text-gray-900 my-5 text-center px-1">
        You’ll be in good company
      </StyledText>

      <StyledView className="w-full pl-5">
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
          // horizontal={true}
          data={data}
          renderItem={({item, index}) => {
            return (
              <StyledButton
                onPressIn={() => {
                  setNumber(index);
                }}
                className="flex flex-row items-center w-40 py-2 my-1  items-center">
                {item.icon.length > 0 ? (
                  <FontAwesome5
                    name={item.icon}
                    size={33}
                    color={index == Number ? '#000' : '#94a3b8'}
                  />
                ) : (
                  <></>
                )}
                <StyledText
                  className={
                    index == Number
                      ? index == 2 || index == 3
                        ? 'text-2xl text-slate-900 font-bold ml-1'
                        : index == 4
                        ? 'text-xl text-slate-900 font-bold ml-1'
                        : 'text-3xl text-slate-900 font-bold text-center '
                      : index == 2 || index == 3
                      ? 'text-2xl text-slate-400 font-bold ml-1'
                      : index == 4
                      ? 'text-xl text-slate-400 font-bold ml-1'
                      : 'text-3xl text-slate-400 font-bold text-center ml-1'
                  }>
                  {item.name}
                </StyledText>
              </StyledButton>
            );
          }}
        />
      </StyledView>
    </StyledView>
  );
};

export default Block39;
