//  Footer Sections
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
const StyledImage = styled(Image);
//const StyledIcon = styled(Icon);

const Block16 = () => {
  const [About, setAbout] = useState(false);
  const [prem, setprem] = useState(false);
  const [camb, setcamb] = useState(false);
  const [blog, setblog] = useState(false);
  const [Affiliate, setAffiliate] = useState(false);
  const [faq, setfaq] = useState(false);
  const [contact, setcontact] = useState(false);
  return (
    <StyledView className="flex items-center">
      <StyledView className="flex flex-row mt-5">
        <StyledImage source={Images.Flowbite} className="w-10 h-10" />
        <StyledText className="self-center text-2xl font-semibold text-gray-900 ml-2">
          Flowbite
        </StyledText>
      </StyledView>
      <StyledText className="text-center text-base mt-4 mx-3">
        Open-source library of over 400+ web components and interactive elements
        built for better web.
      </StyledText>

      <StyledView className="flex flex-row mt-4">
        <StyledButton
          onPress={() => {
            setAbout(!About);
            prem ? setprem(false) : null;
            camb ? setcamb(false) : null;
            blog ? setblog(false) : null;
            Affiliate ? setAffiliate(false) : null;
            faq ? setfaq(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              About
                ? 'text-base border-b p-1 mr-2 text-gray-600'
                : 'text-base p-1 mr-2 text-gray-600'
            }>
            About
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setprem(!prem);
            About ? setAbout(false) : null;
            camb ? setcamb(false) : null;
            blog ? setblog(false) : null;
            Affiliate ? setAffiliate(false) : null;
            faq ? setfaq(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              prem
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            Premium
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setcamb(!camb);
            About ? setAbout(false) : null;
            prem ? setprem(false) : null;
            blog ? setblog(false) : null;
            Affiliate ? setAffiliate(false) : null;
            faq ? setfaq(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              camb
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            Campaigns
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setblog(!blog);
            About ? setAbout(false) : null;
            prem ? setprem(false) : null;
            camb ? setcamb(false) : null;
            Affiliate ? setAffiliate(false) : null;
            faq ? setfaq(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              blog
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            Blog
          </StyledText>
        </StyledButton>
      </StyledView>

      <StyledView className="flex flex-row pb-1">
        <StyledButton
          onPress={() => {
            setAffiliate(!Affiliate);
            About ? setAbout(false) : null;
            prem ? setprem(false) : null;
            camb ? setcamb(false) : null;
            blog ? setblog(false) : null;
            faq ? setfaq(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              Affiliate
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            Affiliate Program
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setfaq(!faq);
            About ? setAbout(false) : null;
            prem ? setprem(false) : null;
            camb ? setcamb(false) : null;
            blog ? setblog(false) : null;
            Affiliate ? setAffiliate(false) : null;
            contact ? setcontact(false) : null;
          }}>
          <StyledText
            className={
              faq
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            FAQs
          </StyledText>
        </StyledButton>
        <StyledButton
          onPress={() => {
            setcontact(!contact);
            About ? setAbout(false) : null;
            prem ? setprem(false) : null;
            camb ? setcamb(false) : null;
            blog ? setblog(false) : null;
            Affiliate ? setAffiliate(false) : null;
            faq ? setfaq(false) : null;
          }}>
          <StyledText
            className={
              contact
                ? 'text-base border-b p-1 mr-2 text-gray-700'
                : 'text-base p-1 mr-2 text-gray-700'
            }>
            Contact
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Block16;
