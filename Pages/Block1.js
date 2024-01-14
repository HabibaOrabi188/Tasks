import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

const Block1 = () => {
  return (
    <StyledView className="flex-1 items-center">
      <TouchableOpacity>
        <StyledView className=" py-1 px-1 pr-4 mt-5 flex flex-row space-x-2 bg-gray-100 rounded-full items-center ">
          <StyledView className="px-4 py-1.5 mr-3 bg-blue-500 rounded-full">
            <StyledText className="text-white text-base ">New</StyledText>
          </StyledView>

          <StyledText className="text-base font-medium ">
            Flowbite is out! See what's new
          </StyledText>

          <Icon name="chevron-right" />
        </StyledView>
      </TouchableOpacity>

      <StyledText className="text-3xl font-bold leading-none text-gray-900 text-center mt-8">
        We invest in the world’s potential
      </StyledText>

      <StyledText className="text-lg leading-none text-gray-500 text-center mt-8 tracking-tight">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth
      </StyledText>

      <StyledView className="flex flex-col space-y-4 mt-8 items-center">
        <StyledButton className="inline-flex py-3 px-5 px-24 justify-center items-center self-center bg-blue-500 rounded-lg flex flex-row space-x-2 items-center ">
          <StyledText className="text-white text-lg font-medium ml-3">
            Learn more
          </StyledText>
          <Icon
            name="arrow-right"
            size={22}
            color={'#fff'}
            style={{marginRight: 10}}
          />
        </StyledButton>

        <StyledButton className="inline-flex py-3 px-24 justify-center items-center self-center  rounded-lg flex flex-row space-x-2 items-center border-2 border-gray-300">
          <Icon name="video" size={25} color={'#000'} />
          <StyledText className="text-gray-800 text-lg font-medium ">
            Watch video
          </StyledText>
        </StyledButton>

        <StyledText className="text-gray-400 text-lg font-semibold ">
          FEATURED IN
        </StyledText>

        <StyledButton className="inline-flex  px-24 justify-center items-center self-center  flex flex-row space-x-2 items-center">
          <Icon name="youtube" size={35} color={'#9ca3af'} />
          <StyledText className="text-gray-400 text-3xl font-bold ">
            YouTube
          </StyledText>
        </StyledButton>

        <StyledButton className="inline-flex px-24 justify-center items-center self-center  flex flex-row space-x-1 items-center ml-3">
          <Icon
            name="product-hunt"
            size={50}
            color={'#9ca3af'}
            style={{marginRight: 10}}
          />
          <StyledText className="text-gray-400 text-2xl font-bold ml-4">
            Product Hunt
          </StyledText>
        </StyledButton>

        <StyledButton className="inline-flex py-1 px-24 justify-center items-center self-center flex flex-row space-x-2 items-center ">
          <Icon name="reddit" size={40} color={'#9ca3af'} />
          <StyledText className="text-gray-400 text-2xl font-bold ">
            reddit
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

// Define your NativeWind styles

export default Block1;
