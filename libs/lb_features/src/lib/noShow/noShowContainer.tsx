import { FaLock, FaRegAddressCard } from 'react-icons/fa';
import { SlLock } from 'react-icons/sl';
import { Dimensions, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

const NoShowContainer = () => {
  const { height } = Dimensions.get('window');
  return (
    <View
      style={{
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#2a2a2a',
        height,
        overflow: 'hidden',
      }}
    >
      <View style={tw`flex-row items-center justify-center`}>
        <View
          style={tw`flex items-center justify-center w-10 h-10 rounded-full bg-red-200 border-2 border-red-500`}
        >
          <Text style={tw`text-2xl text-red-500 font-semibold`}>1</Text>
        </View>
        <View style={tw`w-20 border-t-2 border-[#52555a]`} />
        <View
          style={tw`flex items-center justify-center w-10 h-10 rounded-full bg-[#52555a] border-2 border-[#52555a]`}
        >
          <Text style={tw`text-2xl text-white font-semibold`}>2</Text>
        </View>
        <View style={tw`w-20 border-t-2 border-[#52555a]`} />
        <View
          style={tw`flex items-center justify-center w-10 h-10 rounded-full bg-[#52555a] border-2 border-[#52555a]`}
        >
          <Text style={tw`text-xl text-white font-semibold`}>
            <FaLock />
          </Text>
        </View>
      </View>

      <View style={tw`mt-8`}>
        <Text style={tw`text-[#adacaa] text-center text-lg`}>
          We missed you at Dance Fitness - New class at 08:00 AM
        </Text>

        <Text style={tw`text-white text-center text-4xl font-bold`}>
          Uh oh! 1st no-show of the month.
        </Text>
      </View>

      <View
        style={tw`p-4 border border-white/30 rounded-xl backdrop-blur-md bg-white/10 mt-8`}
      >
        <View style={tw`flex-row items-center justify-between`}>
          <SlLock size={40} color="white" width={'20%'} />
          <Text style={tw`text-white text-2xl w-4/5`}>
            1 day reduced from membership
          </Text>
        </View>

        <View style={tw`w-full border-t border-[#adacaa] my-5`} />

        <View style={tw`flex-row items-center gap-5`}>
          <FaRegAddressCard size={40} color="white" width={'20%'} />
          <Text style={tw`text-white text-2xl w-4/5`}>
            After 2 more no-shows in a month, bookings blocked for next 2 days
          </Text>
        </View>
      </View>

      <Pressable style={tw`bg-white p-3 w-full rounded-md mt-auto`}>
        <Text
          style={tw`text-orange-500 text-lg text-center uppercase font-bold`}
        >
          Got it
        </Text>
      </Pressable>
    </View>
  );
};

export default NoShowContainer;
