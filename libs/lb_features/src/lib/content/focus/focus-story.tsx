import { CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { View, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';

const ConceptActionContainer = () => {
  return (
    <>
      <CardWrapper>
        <Text style={tw`self-start `}>
          In the legendary epic Mahabharata, Drona, an expert archer and mentor,
          challenges his pupils' concentration by instructing them to target the
          eye of a clay bird positioned in a tree. Whereas other students are
          distracted by leaves, tree branches, and the entire bird, Arjuna alone
          zeroes in on the bird's eye and successfully strikes it.
        </Text>
      </CardWrapper>
    </>
  );
};

export default ConceptActionContainer;
