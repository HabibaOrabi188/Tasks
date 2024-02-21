//// event schedule
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
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledScrool = styled(ScrollView);
const StyledInbut = styled(TextInput);

const Block50 = () => {
  const [more, setmore] = useState(false);

  const [data, setdata] = useState([
    {
      time: '08:00 - 09:00',
      text: 'Opening remarks',
    },
    {
      time: '09:00 - 10:00',
      text: 'Bergside LLC: Controlling the video traffic flows',
    },
    {
      time: '10:00 - 11:00',
      text: 'Flowbite - An Open Framework for Forensic Watermarking',
    },
    {
      time: '11:00 - 12:00',
      text: 'Coffee Break',
    },
    {
      time: '12:00 - 13:00',
      text: 'Scaling your brand from €0 to multimillion euros',
    },
    {
      time: '13:00 - 14:00',
      text: 'Updates from the Open Source Multimedia community',
    },
    {
      time: '14:00 - 15:00',
      text: 'Exploring the balance between customer acquisition and retention',
    },
    {
      time: '15:00 - 16:00',
      text: 'Flowbite - An Open Framework for Forensic Watermarking',
    },
    {
      time: '16:00 - 14:00',
      text: 'Scaling your brand from €0 to multimillion euros',
    },
    {
      time: '17:00 - 14:00',
      text: 'Drinks & networking',
    },
  ]);

  const [itemLine, setitemLine] = useState(-1);

  return (
    <ScrollView>
      <StyledView className="px-3">
        <StyledText className="text-4xl font-extrabold leading-tight text-center text-gray-900 mt-4">
          Schedule
        </StyledText>

        <StyledButton
          onPressIn={() => {
            setmore(true);
          }}
          onPressOut={() => {
            setmore(false);
          }}
          className="flex-row self-center items-center space-x-1 mt-4">
          <StyledText
            className={
              more
                ? 'w-auto text-xl font-medium text-blue-500 border-b border-blue-500 '
                : 'w-auto text-xl font-medium text-blue-500 '
            }>
            Learn more about our agenda
          </StyledText>

          <AntDesign name="arrowright" size={20} color="#3b82f6" />
        </StyledButton>

        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <StyledView
                className={
                  index == data.length - 1
                    ? 'mt-3 py-3 border-slate-300 px-1'
                    : 'mt-3 border-b py-3 border-slate-300 px-1'
                }>
                <StyledText className="text-lg font-normal text-gray-500 mb-3">
                  {item.time}
                </StyledText>

                <StyledButton
                  onPressIn={() => {
                    setitemLine(index);
                  }}
                  onPressOut={() => {
                    setitemLine(-1);
                  }}>
                  <StyledText
                    className={
                      itemLine == index
                        ? 'text-lg font-semibold text-gray-900 mb-3 underline underline-offset-1 '
                        : 'text-lg font-semibold text-gray-900 mb-3 '
                    }>
                    {item.text}
                  </StyledText>
                </StyledButton>
              </StyledView>
            );
          }}
        />
      </StyledView>
    </ScrollView>
  );
};

export default Block50;
