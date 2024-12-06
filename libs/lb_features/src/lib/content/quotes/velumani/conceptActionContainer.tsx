import { CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { View, useWindowDimensions, Text } from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';

import { conceptAction } from '../../templates/action/conceptActionConfig';

const ConceptActionContainer = () => {
  return (
    <>
      <CardWrapper>
        <View>
          <Text style={tw`self-start `}>Action Pledge</Text>
          <Text style={tw`self-start `}>{conceptAction.focus.action}</Text>
        </View>
      </CardWrapper>
    </>
  );
};

export default ConceptActionContainer;
