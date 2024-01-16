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
//const Styledmenu = styled(Menu);

const Block3 = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([
    {
      title: 'Overview',
      icon: 'clockcircle',
      icon_type: 'AntDesign',
      body: [],
      press: false,
    },
    {
      title: 'Pages',
      icon: 'document-text-sharp',
      icon_type: 'Ionicons',
      body: [{text: 'Setting'}, {text: 'Kanban'}, {text: 'Calendar'}],
      press: false,
    },
    {
      title: 'Sales',
      icon: 'shopping-bag',
      icon_type: 'FontAwesome5',
      body: [{text: 'Products'}, {text: 'Billing'}, {text: 'Invoice'}],
      press: false,
    },
    {
      title: 'Messages',
      icon: 'archive-arrow-down-outline',
      icon_type: 'MaterialCommunityIcons',
      body: [],
      press: false,
    },
    {
      title: 'Authentication',
      icon: 'lock',
      icon_type: 'FontAwesome5',
      body: [],
      press: false,
    },
  ]);

  const [data2, setData2] = useState([
    {
      title: 'Docs',
      icon: 'clipboard-text',
      icon_type: 'MaterialCommunityIcons',
    },
    {
      title: 'Comonents',
      icon: 'albums',
      icon_type: 'Ionicons',
    },
    {
      title: 'Help',
      icon: 'nuclear',
      icon_type: 'Ionicons',
    },
  ]);

  const [bnt, setBnt] = useState(6);

  return (
    <Drawer
      open={open}
      drawerType="slide"
      swipeEdgeWidth={20}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <StyledView className="flex space-h-3 pt-2">
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <StyledView className="flex jusyify-center">
                    <StyledButton
                      onPress={() => {
                        index == bnt ? setBnt(6) : setBnt(index);
                      }}
                      className="space-y-3 px-4 flex flex-row justify-between items-center">
                      <StyledView className="flex flex-row space-y-4 items-center justify-center">
                        {item.icon_type == 'AntDesign' ? (
                          <AntDesign name={item.icon} size={22} />
                        ) : item.icon_type == 'FontAwesome5' ? (
                          <FontAwesome5 name={item.icon} size={22} />
                        ) : item.icon_type == 'MaterialCommunityIcons' ? (
                          <MaterialCommunityIcons name={item.icon} size={22} />
                        ) : (
                          <Ionicons name={item.icon} size={22} />
                        )}

                        <StyledText className="text-xl mb-4 ml-4 text-gray-800 ">
                          {item.title}
                        </StyledText>
                      </StyledView>

                      {item.body.length > 0 ? (
                        <FontAwesome5
                          name="angle-down"
                          size={24}
                          color="#1f2937"
                        />
                      ) : item.title == 'Messages' ? (
                        <StyledView className="flex w-6 h-6 rounded-full bg-sky-200 items-center justify-center pb-1">
                          <StyledText className="text-base font-medium text-blue-500 ">
                            6
                          </StyledText>
                        </StyledView>
                      ) : null}
                    </StyledButton>

                    {bnt == index ? (
                      <StyledView>
                        {item.body.map((val, i) => (
                          <StyledText className="ml-11 text-xl mb-3 text-gray-800 ">
                            {val.text}
                          </StyledText>
                        ))}
                      </StyledView>
                    ) : null}
                  </StyledView>
                );
              }}
            />

            <StyledView className="flex h-0.5 bg-gray-300  m-3"></StyledView>

            <FlatList
              data={data2}
              renderItem={({item, index}) => {
                return (
                  <StyledView className="flex jusyify-center">
                    <StyledButton
                      onPress={() => {}}
                      className="space-y-3 px-4 flex flex-row justify-between">
                      <StyledView className="flex flex-row space-y-5 items-center justify-center">
                        {item.icon_type == 'AntDesign' ? (
                          <AntDesign name={item.icon} size={22} />
                        ) : item.icon_type == 'FontAwesome5' ? (
                          <FontAwesome5 name={item.icon} size={22} />
                        ) : item.icon_type == 'MaterialCommunityIcons' ? (
                          <MaterialCommunityIcons name={item.icon} size={22} />
                        ) : (
                          <Ionicons name={item.icon} size={22} />
                        )}

                        <StyledText className="text-xl mb-5 ml-4 text-gray-800 ">
                          {item.title}
                        </StyledText>
                      </StyledView>
                    </StyledButton>
                  </StyledView>
                );
              }}
            />
          </StyledView>
        );
      }}>
      <StyledButton
        className="p-5 flex itmes-center mx-3"
        onPress={() => setOpen(prevOpen => !prevOpen)}>
        {open ? null : <Entypo name="menu" size={24} />}
      </StyledButton>
    </Drawer>
  );
};

export default Block3;
