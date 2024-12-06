import { Image, Pressable, View } from 'react-native';
import tw from 'twrnc';
import LazyLoad from 'react-lazyload';

import { getFullImgPath } from './utils';

export const RenderImg = ({ imgDetails, events= [], style = '' }) => {
  const {
    wrapperTwClasses = 'p-2 rounded-md flex-col items-center justify-center max-w-full h-auto',
    imgPath,
    imgTwClasses = 'max-w-full h-auto relative',
  } = imgDetails;


  let imgUrl = getFullImgPath({ imgPath });





  const imageElement =
    <LazyLoad>
      <Image source={{ uri: imgUrl }} style={tw.style(imgTwClasses)} />;
    </LazyLoad>
  return events ? (
    <Pressable style={tw.style(wrapperTwClasses)} {...events}>
      {imageElement}
    </Pressable>
  ) : (
    <View style={tw.style(wrapperTwClasses)}>{imageElement}</View>
  );
};
