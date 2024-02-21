/// FAQ Sections
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
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col,
} from 'react-native-table-component';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
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
const StyledImage = styled(Image);
const StyledScrool = styled(ScrollView);
const StyledInbut = styled(TextInput);
const Styledmenu = styled(Menu);

const Block36 = () => {
  const [data, setData] = useState([
    {
      title: 'What do you mean by "Figma assets"?',
      body: 'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
    },
    {
      title: 'What do you mean by "Figma assets"?',
      body: 'and images included in the screens.',
    },
  ]);

  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#fff',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <StyledView className="py-8 px-3 ">
          <StyledText className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
            Frequently asked questions
          </StyledText>

          <StyledView className="h-1 w-80 border-b border-gray-300 self-center mb-8"></StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2">
                What do you mean by "Figma assets"?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              You will have access to download the full Figma project including
              all of the pages, the components, responsive pages, and also the
              icons, illustrations, and images included in the screens.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 ">
                What does "lifetime access" exactly mean?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              Once you have purchased either the design, code, or both packages,
              you will have access to all of the future updates based on the
              roadmap, free of charge.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 ">
                How does support work?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              We're aware of the importance of well qualified support, that is
              why we decided that support will only be provided by the authors
              that actually worked on this
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-gray-400 text-lg ">
                project. Feel free to
              </StyledText>

              <StyledButton>
                <StyledText className="text-blue-500 text-lg w-full mx-1 text-center border-b border-blue-500">
                  contact us
                </StyledText>
              </StyledButton>

              <StyledText className="text-gray-400 text-lg ml-1 ">
                and we'll
              </StyledText>
            </StyledView>
            <StyledText className="text-gray-400 text-lg ">
              help you out as soon as we can.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-6 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 w-80 pr-2">
                I want to build more than one project. Is that allowed?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              You can use Windster for an unlimited amount of projects, whether
              it's a personal website, a SaaS app, or a website for a client. As
              long as you don't build a product that will directly compete with
              Windster either as a UI kit, theme, or template, it's fine.
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-gray-400 text-lg ">
                Find out more information by
              </StyledText>
              <StyledButton>
                <StyledText className="text-blue-500 text-lg w-24 ml-1 border-b border-blue-500">
                  reading the
                </StyledText>
              </StyledButton>
            </StyledView>

            <StyledButton>
              <StyledText className="text-blue-500 text-lg w-16 border-b border-blue-500">
                license.
              </StyledText>
            </StyledButton>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 ">
                What does "free updates" include?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              The free updates that will be provided is
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-gray-400 text-lg ">
                based on the
              </StyledText>

              <StyledButton>
                <StyledText className="text-blue-500 text-lg w-full mx-1 text-center border-b border-blue-500">
                  roadmap
                </StyledText>
              </StyledButton>

              <StyledText className="text-gray-400 text-lg ml-1 ">
                that we have laid
              </StyledText>
            </StyledView>
            <StyledText className="text-gray-400 text-lg ">
              out for this project. It is also possible that we will provide
              extra updates outside of the roadmap as well.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 ">
                What does the free version include?
              </StyledText>
            </StyledView>

            <StyledView className="flex-row">
              <StyledText className="text-gray-400 text-lg ">The</StyledText>

              <StyledButton>
                <StyledText className="text-blue-500 text-lg w-full mx-1 text-center border-b border-blue-500">
                  free version
                </StyledText>
              </StyledButton>

              <StyledText className="text-gray-400 text-lg ml-1 ">
                of Windster includes a
              </StyledText>
            </StyledView>
            <StyledText className="text-gray-400 text-lg ">
              minimal style guidelines, component variants, and a dashboard page
              with the mobile version alongside it. You can use this version for
              any purposes, because it is open-source under the MIT license.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4  ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 mr-1 ">
                What is the difference between Windster and Tailwind UI?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              Although both Windster and Tailwind UI are built for integration
              with Tailwind CSS, the main difference is in the design, the
              pages, the extra components and UI elements that Windster
              includes. Additionally, Windster is a project that is still in
              development, and later it will include both the application,
              marketing, and e-commerce UI interfaces.
            </StyledText>
          </StyledView>

          <StyledView>
            <StyledView className="flex-row items-center mt-8 mb-4 ">
              <AntDesign name="questioncircle" size={20} color="#94a3b8" />
              <StyledText className="text-lg font-medium text-gray-900 ml-2 ">
                Can I use Windster in open-source projects?
              </StyledText>
            </StyledView>

            <StyledText className="text-gray-400 text-lg ">
              Generally, it is accepted to use Windster in open-source projects,
              as long as it is not a UI library, a theme, a template, a
              page-builder that would be considered as an alternative to
              Windster itself. With that being said, feel free to use this
              design kit for your open-source projects.
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-gray-400 text-lg ">
                Find out more information by
              </StyledText>

              <StyledButton>
                <StyledText className="text-blue-500 text-lg w-full mx-1 text-center border-b border-blue-500">
                  reading the
                </StyledText>
              </StyledButton>
            </StyledView>
            <StyledText className="text-blue-500 text-lg w-16 mx-1  border-b border-blue-500">
              license.
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block36;
