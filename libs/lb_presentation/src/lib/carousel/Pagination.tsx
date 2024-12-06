import { View, Animated, Dimensions, Text } from "react-native"
import tw from 'twrnc'

const {width} = Dimensions.get('screen')

// data is to count the number of pagination dots required based on the number of slides
// scrollx tracks the current scroll position
// index is the index of the current slide
const Pagination = ({ data, scrollX, index }) => {
    return (
      // Container for the pagination dots
      <View style={tw`absolute bottom-5 flex flex-row w-full items-center justify-center`}>
        {data.map((_:any, idx:any) => {
          // Define the input range for interpolation based on the current dot index
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
          // Interpolate the dot width based on the scroll position using the input range
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
            })
          return (
            <Animated.View
              key={`item-${idx}`}
              style={[
                tw`w-9 h-2 rounded-lg bg-gray-400 mx-3`,
                { width: dotWidth },
                idx === index && tw`bg-black`, // Highlight the current dot if its index matches the active slide index
              ]}
            />
          );
        })}
      </View>
    );
  };

export default Pagination