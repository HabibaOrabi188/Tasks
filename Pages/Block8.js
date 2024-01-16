///Team Sections
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

const Block8 = () => {
  const [data, setData] = useState([
    {
      name: 'Bonnie Green',
      track: 'CEO & Web Developer',
      text: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
      img: Images.person1,
    },
    {
      name: 'Jese Leos',
      track: 'CTO',
      text: 'Jese drives the technical strategy of the flowbite platform and brand.',
      img: Images.person2,
    },
    {
      name: 'Michael Gough',
      track: 'Senior Front-end Developer',
      text: 'Michael drives the technical strategy of the flowbite platform and brand.',
      img: Images.person3,
    },
    {
      name: 'Lana Byrd',
      track: 'Marketing & Sale',
      text: 'Lana drives the technical strategy of the flowbite platform and brand.',
      img: Images.person4,
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <StyledView className="flex  bg-white space-y-2 px-1 pt-10 items-center">
        <StyledView className="items-center">
          <StyledText className="text-4xl font-bold text-gray-900  ">
            Our Team
          </StyledText>
          <StyledText className="text-base font-blod text-gray-400 my-5 text-center mx-3  ">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </StyledText>

          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <StyledView className="my-3 border border-gray-200 rounded-xl ">
                  <StyledImage
                    source={item.img}
                    className="flex w-full h-18 rounded-xl "
                    resizeMode="contain"
                  />
                  <StyledText className="mt-4 ml-4 text-xl font-bold tracking-tight text-gray-900">
                    {item.name}
                  </StyledText>
                  <StyledText className="ml-4 text-base text-gray-500">
                    {item.track}
                  </StyledText>

                  <StyledText className="mt-3 ml-4 text-base text-gray-500">
                    {item.text}
                  </StyledText>

                  <StyledView className="flex flex-row my-5 ml-4 space-x-5 items-center ">
                    <Ionicons name="logo-facebook" size={30} color="#6b7280" />
                    <Ionicons name="logo-twitter" size={26} color="#6b7280" />
                    <Ionicons name="logo-github" size={26} color="#6b7280" />
                    <Ionicons
                      name="basketball-outline"
                      size={26}
                      color="#6b7280"
                    />
                  </StyledView>
                </StyledView>
              );
            }}
          />
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default Block8;
