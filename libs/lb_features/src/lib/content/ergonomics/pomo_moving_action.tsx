import { CardHeader, CardWrapper, ScientificStudy } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const PomoMovingAction = () => {
  const assetPath = 'micros';
  return (
    <CardWrapper>
      <CardHeader>Move after every 25 minutes</CardHeader>
      <View>
        <View style={tw`p-4 flex flex-row`}>
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold mb-2`}>During Pomodoro breaks:</Text>
            <View style={tw`ml-4`}>
              <Text style={tw`mb-1`}>- Move for water</Text>
              <Text style={tw`mb-1`}>- Visit the restroom</Text>
              <Text style={tw`mb-1`}>- Chat with friends</Text>
              <Text style={tw`mb-1`}>
                - Rotate your eyes & stare at greenery & distant objects.
              </Text>
            </View>
          </View>

          <RenderImg
            imgDetails={{
              imgPath: `${assetPath}/pomo-move`,
              imgTwClasses: 'w-65 h-55',
            }}
          />
        </View>
        <ScientificStudy style={tw`mt-2`}>
          In a study conducted among software engineers at a private firm in
          Chennai, Tamil Nadu, 77% reported experiencing musculoskeletal pain,
          highlighting a notable prevalence in ergonomic issues.
        </ScientificStudy>
      </View>
    </CardWrapper>
  );
};

export default PomoMovingAction;
