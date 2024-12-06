import { CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import {
  View,
  useWindowDimensions,
  Text
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';
import { storyContent } from './storyContent';

const Story = () => {
  const { width } = useWindowDimensions();
  const { assetPath } = storyContent.common;
  return (
    <>
      {storyContent.items.map((story, index) => (
        <CardWrapper key={index}>
          <RenderImg
            imgDetails={{
                         
              
              imgPath: `${assetPath}/${story.imgName}`,
              imgTwClasses: 'w-76 h-124',
            }}
          />

          <View style={tw`mt-10 mb-5`}>
            <RenderHtml contentWidth={width} source={{ html: story.content }} />
          </View>
        </CardWrapper>
      ))}
    </>
  );
};

export default Story;
