import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import tw from 'twrnc';
import { CardHeader, CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
const PlanningAction = () => {

  const externalUrl = 'https://example.com'; // Replace with your actual URL

  const handleImageClick = () => {
    Linking.openURL(externalUrl);
  };
  return (
    <CardWrapper>
      <CardHeader>
        PLANNING = List tasks + Estimate time + Set deadline + Prioritize
      </CardHeader>
      <View style={tw`mt-5 flex-col items-center`}>
        <Text>Task planning template</Text>

        <RenderImg
          imgDetails={{
            events: {
              onPress: handleImageClick.bind(this),
            },
           
            
            imgPath: `micros/TaskPlanTemplate`,
            imgTwClasses: 'w-93 h-24',
          }}
        />
        <RenderImg
          imgDetails={{
           
            
            imgPath: `micros/taskPlan_m`,
            imgTwClasses: 'w-96 h-124',
          }}
        />
      </View>
    </CardWrapper>
  );
};

export default PlanningAction;
