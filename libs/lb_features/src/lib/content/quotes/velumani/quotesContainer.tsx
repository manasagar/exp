import { CardWrapper } from '@dr/lb_presentation';
import { View, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import tw from 'twrnc';

import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { quotesData } from './quotesData';

//https://docs.google.com/document/d/1if78_vQ0_qhXnMgVz1gXSTeLaMJCjpdTMjJF3S1BN7M/edit?usp=sharing

const QuotesContainer = () => {
  const { width } = useWindowDimensions();
  const {assetPath} = quotesData.common;

  return (
    <>
      {quotesData.velumani.items.map((story, index) => (
        <CardWrapper key={index}>
          {story.imgNames[0].map((imgName, idx) => (
            <RenderImg
              key={imgName}
              imgDetails={{imgPath: `${assetPath}/${imgName}`,
                imgTwClasses: 'w-76 h-124',
              }}
            />))}
          <View style={tw`mt-10 mb-5`}>
            <RenderHtml contentWidth={width} source={{ html: story.quote }} />
            {story.context && (
              <RenderHtml
                contentWidth={width}
                source={{ html: story.context }}
              />
            )}
          </View>
        </CardWrapper>
      ))}
    </>
  );
};

export default QuotesContainer;
