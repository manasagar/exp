import { CardHeader, CardWrapper } from '@dr/lb_presentation';
import { Image, View, Text } from 'react-native';
import tw from 'twrnc';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';

const SittingSmoke = () => {
  return (
    <CardWrapper>
      <CardHeader>Sitting Is The New Smoking</CardHeader>
      <View>
        <RenderImg
          imgDetails={{
            imgPath: `micros/sitting_smoke`,
            imgTwClasses: 'w-76 h-124',
          }}
        />
      </View>
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-bold`}>Increases risk of:</Text>
        <View style={tw`p-4 flex flex-row`}>
          <View style={tw`mr-4`}>
            <Text style={tw`mb-1`}>- Cardiovascular disease</Text>
            <Text style={tw`mb-1`}>- Type 2 diabetes</Text>
            <Text style={tw`mb-1`}>- Obesity</Text>
          </View>
          <View>
            <Text style={tw`mb-1`}>- Musculoskeletal disorders</Text>
            <Text style={tw`mb-1`}>- Certain cancers</Text>
            <Text style={tw`mb-1`}>- Mental health issues</Text>
            <Text style={tw`mb-1`}>- Osteoporosis</Text>
          </View>
        </View>
      </View>
    </CardWrapper>
  );
};

export default SittingSmoke;
