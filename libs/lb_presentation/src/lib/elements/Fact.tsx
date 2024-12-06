import { HtmlRenderer } from '../../../../lb_utils/src/index';
import { Text } from 'react-native';
import tw from 'twrnc';

const Fact = ({ children, style }) => {
  return (
    <Text style={[tw`italic`, style]}>
      <HtmlRenderer htmlContent={children} />
    </Text>
  );
};

export default Fact;
