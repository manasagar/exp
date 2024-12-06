import { CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { View, useWindowDimensions, Text, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';
import { myLessons } from './myLessons';

const MyLessonsContainer = () => {
  const { width } = useWindowDimensions();
  const { assetPath } = myLessons.common;

  return (
    <ScrollView>
      {myLessons.lessonsArr.map((story, index) => (
        <CardWrapper key={index}>
          {/* Use the RenderImg component here */}
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
    </ScrollView>
  );
};

export default MyLessonsContainer;
