///Application Shells
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
} from 'react-native-paper';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
const StyledImage = styled(Image);
const StyledBackImage = styled(ImageBackground, Image);

const AnimatedView = styled(Animatable.View);
//const StyledIcon = styled(Icon);

const Block49 = () => {
  //MyCustomComponent = Animatable.createAnimatableComponent(StyledView);
  const [comment, setcomment] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const closeMenu2 = () => setVisible(false);

  const closeMenu3 = () => setVisible(false);
  const closeMenu4 = () => setVisible(false);

  const [menuNum, setmenuNum] = useState(0);

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
        <StyledView className="px-4 space-y-6">
          <StyledText className="text-xl font-bold text-gray-700 mt-4">
            Discussion (20)
          </StyledText>

          <StyledView className="h-40 w-full border border-gray-300 rounded-lg px-2">
            <StyledInput
              multiline={true}
              className="text-base"
              placeholder="Write a comment"
            />
          </StyledView>

          <StyledButton
            onPress={() => {
              setcomment(true);
            }}
            className={
              comment
                ? 'w-5/12 h-10 bg-blue-500 items-center justify-center border-4 border-sky-300 rounded-lg'
                : 'w-5/12 h-10 bg-blue-500 items-center justify-center rounded-lg'
            }>
            <StyledText className="text-sm text-white font-medium">
              Post commen
            </StyledText>
          </StyledButton>

          <StyledView className="space-y-2 pb-6 border-b border-gray-400">
            <StyledView className="w-80 flex-row items-center space-x-6 ">
              <StyledView className="flex-row items-center">
                <StyledImage
                  className="w-10 h-10 rounded-full mr-2"
                  source={Images.person8}
                />

                <StyledText className="text-base text-gray-700">
                  Michael Gough
                </StyledText>

                <StyledText className="text-base text-gray-500 ml-2 mr-8">
                  Feb. 8, 2022
                </StyledText>

                <Styledmenu
                  className="ml-10"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={menuNum == 1 ? true : false}
                  onDismiss={() => {
                    setmenuNum(0);
                  }}
                  anchorPosition="bottom"
                  //statusBarHeight={20}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton
                      onPress={() => {
                        setmenuNum(1);
                      }}>
                      <FontAwesome5
                        name="ellipsis-h"
                        size={18}
                        color="#9ca3af"
                      />
                    </StyledButton>
                  }>
                  <StyledView className="w-40 ml-4 pr-5">
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Edit
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Remove
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Report
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </Styledmenu>
              </StyledView>
            </StyledView>

            <StyledText className="text-base text-gray-500 ml-2 mr-8">
              Very straight-to-point article. Really worth time reading. Thank
              you! But tools are just the instruments for the UX designers. The
              knowledge of the design tools are as important as the creation of
              the design strategy.
            </StyledText>

            <StyledView className="w-80 flex-row items-center">
              <MaterialIcons name="message" size={22} />
              <StyledText className="text-base text-gray-500 ml-2 mr-8">
                Reply
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="space-y-2 pb-6 border-b border-gray-400">
            <StyledView className="w-80 flex-row items-center space-x-6 ">
              <StyledView className="flex-row items-center">
                <StyledImage
                  className="w-10 h-10 rounded-full mr-2"
                  source={Images.person3}
                />

                <StyledText className="text-base text-gray-700">
                  Jese Leos
                </StyledText>

                <StyledText className="text-base text-gray-500 ml-2 mr-12">
                  Feb. 12, 2022
                </StyledText>

                <Styledmenu
                  className="ml-8"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={menuNum == 2 ? true : false}
                  onDismiss={() => {
                    setmenuNum(0);
                  }}
                  anchorPosition="bottom"
                  //statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton
                      className="ml-2"
                      onPress={() => {
                        setmenuNum(2);
                      }}>
                      <FontAwesome5
                        name="ellipsis-h"
                        size={18}
                        color="#9ca3af"
                      />
                    </StyledButton>
                  }>
                  <StyledView className="w-40 ml-4 pr-5">
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Edit
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Remove
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Report
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </Styledmenu>
              </StyledView>
            </StyledView>

            <StyledText className="text-base text-gray-500 ml-2 mr-8">
              Much appreciated! Glad you liked it ☺️
            </StyledText>

            <StyledView className="w-80 flex-row items-center">
              <MaterialIcons name="message" size={22} />
              <StyledText className="text-base text-gray-500 ml-2 mr-8">
                Reply
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="space-y-2 pb-6 border-b border-gray-400">
            <StyledView className="w-80 flex-row items-center space-x-6 ">
              <StyledView className="flex-row items-center">
                <StyledImage
                  className="w-10 h-10 rounded-full mr-2"
                  source={Images.person1}
                />

                <StyledText className="text-base text-gray-700">
                  Bonnie Green
                </StyledText>

                <StyledText className="text-base text-gray-500 ml-2 mr-8">
                  Mar. 12, 2022
                </StyledText>

                <Styledmenu
                  className="ml-8"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={menuNum == 3 ? true : false}
                  onDismiss={() => {
                    setmenuNum(0);
                  }}
                  anchorPosition="bottom"
                  //statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton
                      onPress={() => {
                        setmenuNum(3);
                      }}>
                      <FontAwesome5
                        name="ellipsis-h"
                        size={18}
                        color="#9ca3af"
                      />
                    </StyledButton>
                  }>
                  <StyledView className="w-40 ml-4 pr-5">
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Edit
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Remove
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Report
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </Styledmenu>
              </StyledView>
            </StyledView>

            <StyledText className="text-base text-gray-500 ml-2 mr-8">
              The article covers the essentials, challenges, myths and stages
              the UX designer should consider while creating the design
              strategy.
            </StyledText>

            <StyledView className="w-80 flex-row items-center">
              <MaterialIcons name="message" size={22} />
              <StyledText className="text-base text-gray-500 ml-2 mr-8">
                Reply
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="space-y-2 pb-6 border-b border-gray-400">
            <StyledView className="w-80 flex-row items-center space-x-6 ">
              <StyledView className="flex-row items-center">
                <StyledImage
                  className="w-10 h-10 rounded-full mr-2"
                  source={Images.person9}
                />

                <StyledText className="text-base text-gray-700">
                  Helene Engels
                </StyledText>

                <StyledText className="text-base text-gray-500 ml-2 mr-8">
                  Jun. 23, 2022
                </StyledText>

                <Styledmenu
                  className="ml-4"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={menuNum == 4 ? true : false}
                  onDismiss={() => {
                    setmenuNum(0);
                  }}
                  anchorPosition="bottom"
                  //statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton
                      onPress={() => {
                        setmenuNum(4);
                      }}>
                      <FontAwesome5
                        name="ellipsis-h"
                        size={18}
                        color="#9ca3af"
                      />
                    </StyledButton>
                  }>
                  <StyledView className="w-40 ml-4 pr-5">
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Edit
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Remove
                      </StyledText>
                    </StyledButton>
                    <StyledButton>
                      <StyledText className="text-base text-gray-700 m-2">
                        Report
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </Styledmenu>
              </StyledView>
            </StyledView>

            <StyledText className="text-base text-gray-500 ml-2 mr-8">
              Thanks for sharing this. I do came from the Backend development
              and explored some of the tools to design my Side Projects.
            </StyledText>

            <StyledView className="w-80 flex-row items-center">
              <MaterialIcons name="message" size={22} />
              <StyledText className="text-base text-gray-500 ml-2 mr-8">
                Reply
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block49;
