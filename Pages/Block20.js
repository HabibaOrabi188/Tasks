//// Blog Templates
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

const Block20 = () => {
  const [tableHead, setableHead] = useState([
    'Country',
    'Date & Time',
    'Amount',
  ]);
  const [tableData, settableData] = useState([
    [
      'United States',
      'April 21 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        '$2,300'
      </StyledText>,
    ],
    [
      'Canada',
      'May 31, 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        $300
      </StyledText>,
    ],
    [
      'United Kingdom',
      'June 3, 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        '2,500
      </StyledText>,
    ],
    [
      'Australia',
      'June 23, 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        $3,543
      </StyledText>,
    ],
    [
      'Germany',
      'July 6, 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        $99
      </StyledText>,
    ],
    [
      'France',
      'August 23, 2021',
      <StyledText className="text-gray-800 text-base font-simibold ml-2 ">
        $2,540
      </StyledText>,
    ],
  ]);

  const [foolder, setFoolder] = useState([
    {
      title: 'COMPANY',
      data: ['About', 'Careers', 'Brand Center', 'Blog'],
    },
    {
      title: 'HELP CENTER',
      data: ['Discord Server', 'Twitter', 'Facebook', ' Contact Us'],
    },
    {
      title: 'LEGAL',
      data: ['Privacy Policy', 'Licensing', 'Terms'],
    },
    {
      title: 'COMPANY',
      data: ['About', 'Careers', 'Brand Center', 'Blog'],
    },
    {
      title: 'DOWNLOAD',
      data: ['iOS', 'Android', 'Windows', 'MacOS'],
    },
  ]);

  const [inbutBnt, setinbutBnt] = useState(false);

  const [commentBnt, setcommentBnt] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu2 = () => setVisible2(true);
  const closeMenu2 = () => setVisible2(false);

  const [visible3, setVisible3] = React.useState(false);
  const openMenu3 = () => setVisible3(true);
  const closeMenu3 = () => setVisible3(false);

  const [visible4, setVisible4] = React.useState(false);
  const openMenu4 = () => setVisible4(true);
  const closeMenu4 = () => setVisible4(false);

  const [inputBnt, setinputBnt] = useState(false);

  const [subscribe, setsubscribe] = useState(false);

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
        <StyledView className="flex items-center space-y-4 px-3">
          <StyledView className="flex flex-row items-center my-4">
            <StyledImage
              source={Images.person8}
              className="mr-2 w-16 h-16 rounded-full"
            />
            <StyledView>
              <StyledText className="text-xl font-bold text-gray-900">
                Jese Leos
              </StyledText>
              <StyledText className="text-base text-gray-400">
                Graphic Designer, educator & CEO
              </StyledText>
              <StyledText className="text-base text-gray-400">
                Feb. 8, 2022
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledText className=" text-3xl font-extrabold text-gray-900">
            Best practices for successful prototypes
          </StyledText>
          <StyledText className="mx-3 text-lg text-gray-400">
            Flowbite is an open-source library of UI components built with the
            utility-first classes from Tailwind CSS. It also includes
            interactive elements such as dropdowns, modals, datepickers.
          </StyledText>
          <StyledText className=" mx-3 text-base text-gray-400">
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </StyledText>
          <StyledView>
            <StyledView className="flex-row mx-3">
              <StyledText className=" text-base text-gray-400">
                {'But then I found a '}
              </StyledText>
              <StyledButton>
                <StyledText className="  text-base text-blue-500 border-b h-5 ">
                  component library based on
                </StyledText>
              </StyledButton>
            </StyledView>
            <StyledView className="flex-row mx-3">
              <StyledButton>
                <StyledText className="  text-base text-blue-500 border-b h-5 ">
                  Tailwind CSS called Flowbite.
                </StyledText>
              </StyledButton>
              <StyledText className=" text-base text-gray-400">
                {' It comes with the'}
              </StyledText>
            </StyledView>
            <StyledText className="ml-3 text-base text-gray-400">
              most commonly used UI components, such as buttons, navigation
              bars, cards, form elements, and more which are conveniently built
              with the utility classes from Tailwind CSS.
            </StyledText>
          </StyledView>
          <StyledView className="h-64 w-full items-center mb-3">
            <StyledImage
              source={Images.Digital_art}
              className="w-11/12 h-60 rounded"
            />

            <StyledText className="text-base text-gray-400">
              Digital art by Anonymous
            </StyledText>
          </StyledView>
          <StyledText className="text-2xl mr-6 font-bold text-gray-900">
            Getting started with Flowbite
          </StyledText>
          <StyledView>
            <StyledText className="flex text-base text-gray-400">
              First of all you need to understand how Flowbite works. This
              library is not another framework. Rather, it is a set of
              components based on Tailwind CSS that you can just copy-paste from
              the documentation.
            </StyledText>
          </StyledView>
          <StyledText className="text-base text-gray-400 ">
            It also includes a JavaScript file that enables interactive
            components, such as modals, dropdowns, and datepickers which you can
            optionally include into your project via CDN or NPM.
          </StyledText>
          <StyledView className="">
            <StyledView className="flex-row">
              <StyledText className="text-base text-gray-400 ">
                {'You can check out the '}
              </StyledText>
              <StyledButton>
                <StyledText className="  text-base text-blue-500 border-b h-5 ">
                  quickstart guide
                </StyledText>
              </StyledButton>

              <StyledText className="text-base text-gray-400 ">
                {' to          '}
              </StyledText>
            </StyledView>
            <StyledText className="text-base text-gray-400 ">
              the elements by including the CDN files into your project. But if
              you want to build a project with Flowbite I recommend you to
              follow the build tools steps so that you can purge and minify the
              generated CSS.
            </StyledText>
          </StyledView>
          <StyledView className="">
            <StyledText className="text-base text-gray-400 ">
              You'll also receive a lot of useful application UI, marketing UI,
              and e-commerce pages that can help you get started with your
              projects even
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-base text-gray-400 ">
                {'faster. You can check out this '}
              </StyledText>
              <StyledButton>
                <StyledText className="  text-base text-blue-500 border-b h-5 ">
                  comparison table
                </StyledText>
              </StyledButton>
            </StyledView>
            <StyledText className="text-base text-gray-400 ">
              to better understand the differences between the open-source and
              pro version of Flowbite.
            </StyledText>
          </StyledView>
          <StyledText className="text-2xl mr-6 font-bold text-gray-900">
            When does design come in handy?
          </StyledText>
          <StyledText className="text-base text-gray-400 ">
            While it might seem like extra work at a first glance, here are some
            key moments in which prototyping will come in handy:
          </StyledText>
          <StyledView className="space-y-2">
            <StyledView className="">
              <StyledView className="flex-row">
                <StyledText className="text-base text-gray-400 ">1.</StyledText>
                <StyledText className="text-base text-gray-900 ">
                  {' Usability testing. '}
                </StyledText>
                <StyledText className="text-base text-gray-400 ">
                  Does your user know how to
                </StyledText>
              </StyledView>
              <StyledText className="text-base text-gray-400 ml-4 ">
                exit out of screens? Can they follow your intended user journey
                and buy something from the site you’ve designed? By running a
                usability test, you’ll be able to see how users will interact
                with your design once it’s live;
              </StyledText>
            </StyledView>

            <StyledView className="">
              <StyledView className="flex-row">
                <StyledText className="text-base text-gray-400 ">2.</StyledText>
                <StyledText className="text-base text-gray-900 ">
                  {' Involving stakeholders '}
                </StyledText>
                <StyledText className="text-base text-gray-400 ">
                  Need to check if your
                </StyledText>
              </StyledView>
              <StyledText className="text-base text-gray-400 ml-4 ">
                GDPR consent boxes are displaying properly? Pass your prototype
                to your data protection team and they can test it for real;
              </StyledText>
            </StyledView>

            <StyledView className="mr-5">
              <StyledView className="flex-row">
                <StyledText className="text-base text-gray-400 ">3.</StyledText>
                <StyledText className="text-base text-gray-900 ">
                  {' Impressing a client '}
                </StyledText>
                <StyledText className="text-base text-gray-400 ">
                  Prototypes can help
                </StyledText>
              </StyledView>
              <StyledText className="text-base text-gray-400 ml-4 ">
                explain or even sell your idea by providing your client with a
                hands-on experience;
              </StyledText>
            </StyledView>

            <StyledView className="">
              <StyledView className="flex-row">
                <StyledText className="text-base text-gray-400 ">4.</StyledText>
                <StyledText className="text-base text-gray-900 ">
                  {' Communicating your vision. '}
                </StyledText>
                <StyledText className="text-base text-gray-400 ">
                  By using an
                </StyledText>
              </StyledView>
              <StyledText className="text-base text-gray-400 ml-4 ">
                interactive medium to preview and test design elements,
                designers and developers can understand each other — and the
                project — better.
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledText className="text-xl mr-6 font-bold text-gray-900">
            Laying the groundwork for best design
          </StyledText>
          <StyledText className="text-base text-gray-400">
            Before going digital, you might benefit from scribbling down some
            ideas in a sketchbook. This way, you can think things through before
            committing to an actual design project.
          </StyledText>
          <StyledView className="">
            <StyledText className="text-base text-gray-400 ">
              Let's start by including the CSS file inside the
            </StyledText>

            <StyledView className="flex-row">
              <StyledText className="text-base text-gray-900 bg-gray-200 w-11 pl-1">
                head
              </StyledText>
              <StyledText className="text-base text-gray-400 ">
                {' tag of your HTML.'}
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="w-80">
            <StyledText className="text-xl font-bold text-gray-900">
              Understanding typography
            </StyledText>
            <StyledText className="text-lg font-simibold text-gray-900 my-2">
              Type properties
            </StyledText>
            <StyledText className="text-base text-gray-400 ">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </StyledText>

            <StyledText className="text-lg font-simibold text-gray-900 my-2">
              Baseline
            </StyledText>
            <StyledText className="text-base text-gray-400 ">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </StyledText>

            <StyledText className="text-lg font-simibold text-gray-900 my-2">
              Measurement from the baseline
            </StyledText>
            <StyledText className="text-base text-gray-400 ">
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </StyledText>
          </StyledView>
          <StyledView className="w-80">
            <StyledText className="text-xl font-bold text-gray-900">
              Type classification
            </StyledText>
            <StyledText className="text-lg font-simibold text-gray-900 my-2">
              Serif
            </StyledText>
            <StyledText className="text-base text-gray-400 ">
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </StyledText>

            <StyledText className="text-lg font-simibold text-gray-900 mt-2">
              Old-Style serifs
            </StyledText>
            <StyledView className="flex-row items-center">
              <StyledText className="text-3xl font-extrabold text-gray-400 mb-6 ">
                .
              </StyledText>
              <StyledText className="text-base text-gray-400 ml-2 mt-2 ">
                Low contrast between thick and thin strokes
              </StyledText>
            </StyledView>

            <StyledView className="flex-row items-center">
              <StyledText className="text-3xl font-extrabold text-gray-400 ">
                .
              </StyledText>
              <StyledText className="text-base text-gray-400 ml-2 mt-2 ">
                Diagonal stress in the strokes
              </StyledText>
            </StyledView>

            <StyledView className="flex-row items-center">
              <StyledText className="text-3xl font-extrabold text-gray-400 ">
                .
              </StyledText>
              <StyledText className="text-base text-gray-400 ml-2 mt-2 ">
                Slanted serifs on lower-case ascenders
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledImage
            resizeMode="stretch"
            source={Images.ssss}
            className="w-11/12 h-40"
          />
          <StyledView>
            <StyledText className="text-base text-gray-400 ml-1 mr-2 mt-2 ">
              {'l.   Low contrast between thick and thin strokes'}
            </StyledText>
            <StyledText className="text-base text-gray-400 ml-1 mr-2 mt-2">
              {'2.   Diagonal stress in the strokes'}
            </StyledText>
            <StyledText className="text-base text-gray-400 ml-1 mr-2 mt-2">
              {'3.   Slanted serifs on lower-case ascenders'}
            </StyledText>
          </StyledView>
          <StyledText className="text-xl font-bold text-gray-900 mr-8">
            Laying the best for successful prototyping
          </StyledText>
          <StyledText className="text-base text-gray-400">
            A serif is a small shape or projection that appears at the
            beginning:
          </StyledText>
          <StyledView className="w-11/12">
            <FontAwesome5 name="quote-left" size={30} color="#9ca3af" />
          </StyledView>
          <StyledText className="text-lg italic font-semibold text-gray-900 mr-2">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </StyledText>
          <StyledView className="w-11/12">
            <StyledText className="text-lg font-medium text-gray-700">
              Code example
            </StyledText>
          </StyledView>
          <StyledText className="text-base text-gray-400 mx-2">
            A serif is a small shape or projection that appears at the beginning
            or end of a stroke on a letter. Typefaces with serifs are called
            serif typefaces. Serif fonts are classified as one of the following:
          </StyledText>
          <StyledView className="h-96">
            <StyledScrool
              horizontal={true}
              className="bg-gray-200 mb-1 py-3 px-2">
              <StyledView>
                <StyledText className="text-gray-600 mt-1 space-y-2 leading-6">
                  {'<dl class="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white>\n' +
                    '<div class="flex flex-col justify-center items-center">'}
                </StyledText>
                <StyledText className="text-gray-600 ml-2 leading-6">
                  {'<dt class="mb-2 text-3xl font-extrabold">73M+</dt>\n' +
                    '<dd class="text-lg font-normal text-gray-500 dark:text-gray-400">developers</dd>'}
                </StyledText>
                <StyledText className="text-gray-600 leading-6">
                  {'</div>'}
                </StyledText>

                <StyledText className="text-gray-600  leading-6">
                  {'<div class="flex flex-col justify-center items-center">'}
                </StyledText>
                <StyledText className="text-gray-600 ml-2 leading-6">
                  {'<dt class="mb-2 text-3xl font-extrabold">1B+</dt>\n' +
                    '<dd class="text-lg font-normal text-gray-500 dark:text-gray-400">contributors</dd>'}
                </StyledText>
                <StyledText className="text-gray-600 leading-6">
                  {'</div>'}
                </StyledText>

                <StyledText className="text-gray-600  leading-6">
                  {'<div class="flex flex-col justify-center items-center">'}
                </StyledText>
                <StyledText className="text-gray-600 ml-2 leading-6">
                  {'<dt class="mb-2 text-3xl font-extrabold">4M+</dt>\n' +
                    ' <dd class="text-lg font-normal text-gray-500 dark:text-gray-400">organizations</dd>'}
                </StyledText>
                <StyledText className="text-gray-600 leading-6">
                  {'</div>'}
                </StyledText>
                <StyledText className="text-gray-600 leading-6">
                  {'</dl>'}
                </StyledText>
              </StyledView>
            </StyledScrool>
          </StyledView>
          <StyledView className="w-11/12">
            <StyledText className="text-lg font-medium text-gray-700">
              table example
            </StyledText>
          </StyledView>
          <StyledText className="text-base text-gray-400">
            A serif is a small shape or projection that appears at the beginning
            or end of a stroke on a letter.
          </StyledText>
          <StyledView className="w-96 pl-4">
            <Table
              borderStyle={{
                borderBottomWidth: 2,
                borderColor: '#c8e1ff',
              }}>
              <Row
                data={tableHead}
                style={{height: 40, backgroundColor: '#f1f5f9'}}
                textStyle={{margin: 6}}
              />
              <TableWrapper s>
                <Rows
                  data={tableData}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#e2e8f0',
                    height: 40,
                  }}
                  textStyle={{margin: 6}}
                />
              </TableWrapper>
            </Table>
          </StyledView>
          <StyledText className="text-xl font-bold text-gray-900 mr-2">
            Best practices for setting up your prototype
          </StyledText>
          <StyledView className="">
            <StyledView className="flex-row">
              <StyledText className="text-base text-gray-800">
                Consider your user.
              </StyledText>
              <StyledText className="text-base text-gray-400">
                {' To create an intuitive user '}
              </StyledText>
            </StyledView>
            <StyledText className="text-base text-gray-400 mx-.5">
              try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </StyledText>
          </StyledView>
          <StyledView className="">
            <StyledView className="flex-row">
              <StyledText className="text-base text-gray-800">
                Start from the inside out.
              </StyledText>
              <StyledText className="text-base text-gray-400">
                {' A nice way to both'}
              </StyledText>
            </StyledView>
            <StyledText className="text-base text-gray-400 mr-.5">
              organize your tasks and create more user-friendly prototypes is by
              building your prototypes ‘inside out’. Start by focusing on what
              will be important to your user, like a Buy now button or an image
              gallery, and list each element by order of priority. This way,
              you’ll be able to create a prototype that puts your users’ needs
              at the heart of your design.
            </StyledText>
          </StyledView>
          <StyledView className="w-80">
            <StyledText className="text-xl font-bold text-gray-900 mr-2">
              Discussion (20)
            </StyledText>
          </StyledView>
          <StyledView className="w-11/12 h-40 border border-gray-200 rounded mb-3 items-center justify-center">
            <StyledInbut
              className={
                inbutBnt
                  ? 'w-72 h-36 border border-gray-600 '
                  : 'w-72 h-36 border-gray-600 '
              }
              onPressIn={() => {
                setinbutBnt(true);
              }}
              onEndEditing={() => {
                setinbutBnt(false);
              }}
              placeholder="Write a comment... "
            />
          </StyledView>
          <StyledView className="w-11/12">
            <StyledButton
              onPress={() => {
                setcommentBnt(!commentBnt);
              }}
              className={
                commentBnt
                  ? 'w-36 py-1 bg-blue-500  items-center justify-center rounded border-4 border-sky-400'
                  : 'w-36  py-2 bg-blue-500  items-center justify-center rounded  '
              }>
              <StyledText className="text-lg text-gray-50 ">
                post comment
              </StyledText>
            </StyledButton>
          </StyledView>

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
                  visible={visible}
                  onDismiss={closeMenu}
                  anchorPosition="bottom"
                  //statusBarHeight={20}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton onPress={openMenu}>
                      <FontAwesome5 name="ellipsis-h" size={25} color="#000" />
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
                  visible={visible2}
                  onDismiss={closeMenu2}
                  anchorPosition="bottom"
                  //statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton className="ml-2" onPress={openMenu2}>
                      <FontAwesome5 name="ellipsis-h" size={25} color="#000" />
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
                  visible={visible3}
                  onDismiss={closeMenu3}
                  anchorPosition="bottom"
                  //statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton onPress={openMenu3}>
                      <FontAwesome5 name="ellipsis-h" size={25} color="#000" />
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
                  visible={visible4}
                  onDismiss={closeMenu4}
                  anchorPosition="bottom"
                  statusBarHeight={80}
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <StyledButton onPress={openMenu4}>
                      <FontAwesome5 name="ellipsis-h" size={25} color="#000" />
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

          <StyledView className="bg-slate-200 w-screen px-4">
            <StyledView className="w-11/12 my-3">
              <StyledText className="text-2xl font-bold text-gray-900">
                Related articles
              </StyledText>

              <StyledImage
                className="w-11/12 h-52 my-5 rounded-lg"
                resizeMode="cover"
                source={Images.office}
              />

              <StyledText className="text-2xl font-semibold text-gray-900">
                Our first office
              </StyledText>

              <StyledText className="text-base text-gray-500 my-2">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </StyledText>

              <StyledText className="text-lg font-medium text-blue-500 mt-2">
                Read in 2 minutes
              </StyledText>

              <StyledImage
                className="w-11/12 h-48 my-5 rounded-lg"
                resizeMode="cover"
                source={Images.Digital_art}
              />

              <StyledText className="text-2xl font-semibold text-gray-900">
                Enterprise design tips
              </StyledText>

              <StyledText className="text-base text-gray-500 my-2">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </StyledText>
              <StyledText className="text-lg font-medium text-blue-500 mt-2">
                Read in 12 minutes
              </StyledText>

              <StyledImage
                className="w-11/12 h-48 my-5 rounded-lg"
                resizeMode="cover"
                source={Images.google}
              />

              <StyledText className="text-2xl font-semibold text-gray-900">
                We partnered with Google
              </StyledText>

              <StyledText className="text-base text-gray-500 my-2">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </StyledText>
              <StyledText className="text-lg font-medium text-blue-500 mt-2">
                Read in 8 minutes
              </StyledText>

              <StyledImage
                className="w-11/12 h-48 my-5 rounded-lg"
                resizeMode="cover"
                source={Images.meeting}
              />

              <StyledText className="text-2xl font-semibold text-gray-900">
                Our first project with React
              </StyledText>

              <StyledText className="text-base text-gray-500 my-2">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </StyledText>
              <StyledText className="text-lg font-medium text-blue-500 my-2">
                Read in 4 minutes
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledText className="text-2xl font-bold mr-10 text-gray-900">
            Sign up for our newsletter
          </StyledText>

          <StyledText className="text-base text-stale-500">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </StyledText>

          <StyledView
            className={
              inputBnt
                ? 'w-80 border-2 border-gray-900 h-11 flex-row items-center rounded-lg pl-3 bg-white'
                : 'w-80 border border-gray-200 h-11 flex-row items-center rounded-lg pl-3 bg-white'
            }>
            <MaterialIcons name="email" color="#6b7280" size={24} />
            <StyledInbut
              onPressIn={() => {
                setinputBnt(true);
              }}
              className=""
              placeholder="Enter your email"
            />
          </StyledView>

          <StyledButton
            onPress={() => {
              setsubscribe(true);
            }}
            className={
              subscribe
                ? 'w-80 border-4 border-sky-400 h-11 flex-row items-center rounded-lg pl-3 bg-blue-500 justify-center'
                : 'w-80  h-11 flex-row items-center rounded-lg pl-3 bg-blue-500 justify-center'
            }>
            <StyledText className="text-sm font-medium text-center text-white">
              Subscribe
            </StyledText>
          </StyledButton>

          <StyledView>
            <StyledView className="flex-row">
              <StyledText className="text-sm text-gray-500 mb-1">
                We care about the protection of your data.
              </StyledText>
              <StyledText className="text-sm text-blue-500 mb-1">
                {' Read our '}
              </StyledText>
            </StyledView>
            <StyledText className="text-sm text-blue-500 mb-2">
              Privacy Policy.
            </StyledText>
          </StyledView>

          <StyledView className="flex  flex-wrap flex-row justify-between bg-slate-200 w-screen px-7 pt-3">
            {foolder.map((list, index) => {
              return (
                <StyledView className="w-2/5">
                  <StyledText className="text-lg font-normal text-gray-700 my-3">
                    {list.title}
                  </StyledText>
                  {list.data.map(item => {
                    return (
                      <StyledButton>
                        <StyledText className="text-base text-stale-500 my-2 ">
                          {item}
                        </StyledText>
                      </StyledButton>
                    );
                  })}
                </StyledView>
              );
            })}

            <StyledView className="w-full border-t border-gray-300 my-5 items-center ">
              <StyledView className="flex-row items-center">
                <StyledImage source={Images.Flowbite} className="h-8 w-8" />
                <StyledText className="text-xl font-bold text-gray-900 ml-2">
                  Flowbite
                </StyledText>
              </StyledView>

              <StyledText className="text-sm text-stale-500 my-2 ">
                © 2021-2022 Flowbite™. All Rights Reserved.
              </StyledText>
              <StyledView className="flex flex-row space-x-3 mt-4">
                <Fontisto name="facebook" size={20} />

                <Fontisto name="twitter" size={20} />

                <AntDesign name="github" size={20} />

                <AntDesign name="dribbble" size={20} />
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block20;
