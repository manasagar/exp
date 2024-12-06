import { AppInstallBtn, CardHeader, CardWrapper } from '@dr/lb_presentation';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import tw from 'twrnc';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';

const LayAction = () => {
  const assetPath = 'micros';
  return (
    <CardWrapper>
      <CardHeader>
        Your keyboard might be your livelihood, but your body is your temple.
      </CardHeader>

      <View style={tw`mt-10 mb-5`}>
        <Text style={tw`text-center mt-5`}>
          <Text style={tw`font-bold`}>Whenever feasible</Text> (during meetings
          or periods of low typing),
        </Text>
        <Text style={tw`text-center font-bold mt-5`}>lay down & work.</Text>
      </View>

      <RenderImg
        imgDetails={{
          imgPath: `${assetPath}/Tablemate_sleeping`,
          imgTwClasses: 'w-76 h-124',
        }}
      />


      <TouchableOpacity
        style={tw`self-start mt-10 px-3 py-2 rounded bg-blue-500 inline-flex items-center justify-between shadow-md mb-5 max-w-xs w-auto`}
      >
        <Text style={tw`text-white font-bold text-lg mr-2`}>
          Customize Your Tablemate
        </Text>
 
        <Text style={{ fontSize: 20 }}>🛠️</Text>
      </TouchableOpacity>
    </CardWrapper>
  );
};

export default LayAction;
