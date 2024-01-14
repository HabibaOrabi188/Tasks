import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
//const StyledIcon = styled(Icon);

const Block4 = () => {
  const [data, setData] = useState([
    {
      title: 'Marketing',
      icon: 'heartbeat',
      icon_type: 'Fontisto',
      body: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    },
    {
      title: 'Legal',
      icon: 'graduation-cap',
      icon_type: 'FontAwesome6',
      body: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
    },
    {
      title: 'Business Automation',
      icon: 'business-center',
      icon_type: 'MaterialIcons',
      body: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
    },
    {
      title: 'Finance',
      icon: 'monetization-on',
      icon_type: 'MaterialIcons',
      body: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
    },
    {
      title: 'Enterprise Design',
      icon: 'albums',
      icon_type: 'Ionicons',
      body: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
    },
    {
      title: 'Operations',
      icon: 'player-settings',
      icon_type: 'Fontisto',
      body: 'Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.',
    },
  ]);

  return (
    <ScrollView>
      <StyledView className="flex  bg-white space-y-3 px-4 pt-10">
        <StyledView>
          <StyledText className="text-3xl font-bold text-gray-900 my-2  ">
            Designed for business teams like yours
          </StyledText>
          <StyledText className="text-base font-blod text-gray-400  ">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </StyledText>
        </StyledView>

        {data.map((item, index) => (
          <StyledView className="text-3xl font-bold text-gray-900 mx-2 ">
            <StyledView className="w-12 h-12 rounded-full bg-sky-200 items-center justify-center mt-5">
              {item.icon_type == 'FontAwesome6' ? (
                <FontAwesome6 name={item.icon} size={21} color="#3b82f6" />
              ) : item.icon_type == 'Fontisto' ? (
                <Fontisto name={item.icon} size={21} color="#3b82f6" />
              ) : item.icon_type == 'MaterialIcons' ? (
                <MaterialIcons name={item.icon} size={23} color="#3b82f6" />
              ) : (
                <Ionicons name={item.icon} size={21} color="#3b82f6" />
              )}
            </StyledView>

            <StyledText className="text-2xl font-bold text-gray-900 my-2 ">
              {item.title}
            </StyledText>
            <StyledText className="text-base font-blod text-gray-400  ">
              {item.body}
            </StyledText>
          </StyledView>
        ))}
      </StyledView>
    </ScrollView>
  );
};

export default Block4;
