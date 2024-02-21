///// Contact Forms
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
const StyledIcon = styled(FontAwesome5);

const Block25 = () => {
  const [email, setemail] = useState(false);

  const [subject, setsubject] = useState(false);

  const [message, setmessage] = useState(false);

  const [submit, setsubmit] = useState(false);

  return (
    <PaperProvider>
      <ScrollView>
        <StyledView className="flex items-centers py-8 px-4">
          <StyledText className="mb-4 text-4xl font-extrabold text-center text-gray-900">
            Contact Us
          </StyledText>
          <StyledText className="mb-8 font-light text-center text-gray-500 text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </StyledText>

          <StyledText className="text-lg font-medium text-gray-900">
            Your email
          </StyledText>

          <StyledInput
            onPressIn={() => {
              setemail(true);
              setsubject(false);
              setmessage(false);
            }}
            onEndEditing={() => {
              setemail(false);
            }}
            className={
              email
                ? 'w-80 h-12 bg-slate-100 border-2 border-slate-900 rounded-lg my-2 pl-3'
                : 'w-80 h-12 bg-slate-100 border border-slate-300 rounded-lg my-2 pl-3'
            }
            placeholder="name@flowbite.com"
          />

          <StyledText className="text-lg font-medium text-gray-900 mt-5">
            Subject
          </StyledText>

          <StyledInput
            onPressIn={() => {
              setsubject(true);
              setemail(false);
              setmessage(false);
            }}
            onEndEditing={() => {
              setsubject(false);
            }}
            className={
              subject
                ? 'w-80 h-12 bg-slate-100 border-2 border-slate-900 rounded-lg my-2 pl-3'
                : 'w-80 h-12 bg-slate-100 border border-slate-300 rounded-lg my-2 pl-3'
            }
            placeholder="Let us know how we can help you"
          />

          <StyledText className="text-lg font-medium text-gray-900 mt-5">
            Your message
          </StyledText>

          <StyledInput
            onPressIn={() => {
              setmessage(true);
              setsubject(false);
              setemail(false);
            }}
            onEndEditing={() => {
              setmessage(false);
            }}
            className={
              message
                ? 'w-80 h-36 bg-slate-100 border-2 border-slate-900 rounded-lg my-2 pl-3 items-start'
                : 'w-80 h-36 bg-slate-100 border border-slate-300 rounded-lg my-2 pl-3'
            }
            placeholder="Leave a comment..."
          />

          <StyledButton
            onPress={() => {
              setsubmit(true);
            }}
            className={
              submit
                ? 'w-40 bg-blue-500 h-14 rounded-xl justify-center my-3 border-4 border-sky-200'
                : 'w-40 bg-blue-500 h-14 rounded-xl justify-center my-3'
            }>
            <StyledText className="font-medium text-center text-base text-white">
              Send message
            </StyledText>
          </StyledButton>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block25;
