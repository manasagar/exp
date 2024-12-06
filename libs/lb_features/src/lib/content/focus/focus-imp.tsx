import { CardHeader, CardWrapper } from '@dr/lb_presentation';
import { Image, Text, View } from 'react-native';
import tw from 'twrnc';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
const FocusImp = () => {
  return (
    <CardWrapper>
      <CardHeader>
        A trembling hand struggles to ignite a piece of paper
      </CardHeader>

      <RenderImg
        imgDetails={{
         
         
          imgPath: `micros/sunMagnifier`,
          imgTwClasses: 'w-99 h-99',
        }}
      />
    </CardWrapper>
  );
};

export default FocusImp;
