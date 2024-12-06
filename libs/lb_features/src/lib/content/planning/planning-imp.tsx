import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { CardHeader } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
const PlanningImp = () => {
  return (
    <View id="plan-imp">
      <CardHeader>Failing to plan is planning to fail</CardHeader>
      <View style={tw`p-5  items-center justify-center`}>
        <RenderImg
          imgDetails={{
            imgPath: `micros/jar`,
            imgTwClasses: 'w-65 h-65',
          }}
        />

        <Text>
          What would be the efficient sequence to fill the jar with below items?
        </Text>

        <View
          style={tw`flex-col md:flex-row justify-between mt-5 items-center`}
        >
          {['pebbles', 'water', 'sand', 'big_stones'].map((option, index) => (
            <RenderImg
              imgDetails={{
                imgPath: `micros/${option}`,
                imgTwClasses: 'w-65 h-65',
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default PlanningImp;
