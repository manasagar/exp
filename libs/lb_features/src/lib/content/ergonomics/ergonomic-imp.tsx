import { CardHeader, CardWrapper, Fact } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { View } from 'react-native';
import tw from 'twrnc';

const ErgonomicImp = () => {
  const assetPath = 'micros';
  return (
    <CardWrapper>
      <CardHeader>
        Take care of your body. It's the only place you have to live.
      </CardHeader>
      <View>
        <RenderImg
          imgDetails={{
            imgPath: `${assetPath}/Sad_donkey`,
            imgTwClasses: 'w-76 h-124',
          }}
        />
      </View>
      <View>
        <RenderImg
          imgDetails={{
            imgPath: `${assetPath}/Happy_donkey`,
            imgTwClasses: 'w-76 h-124',
          }}
        />
      </View>
      <Fact style={tw`mt-2`}>
        Ergonomic workplaces can improve employee productivity by up to 20%.
      </Fact>
    </CardWrapper>
  );
};

export default ErgonomicImp;
