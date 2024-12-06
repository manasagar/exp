import { View, Image, Text, Dimensions, ScrollView } from "react-native";
import { useSelectorWrap } from "../../../../lb_data-api/src/index";
import tw from "twrnc";
import { Key } from "react";

const ScreenshotDisplay = () => {
  const width = Dimensions.get("window").width;
  const data = useSelectorWrap("screenshots_rn").data;
  const filteredData = data.filter(
    (item: string) => item !== null && item !== "undefined"
  );
  return (
    <ScrollView>
    <View style={[tw`flex flex-row flex-wrap justify-evenly`]}>
      {data !== null && data.length > 0 ? (
        filteredData.map((url: any, idx: Key) => {
         return (
          <View key={idx}>
            <Image
              source={{ uri: url }}
              resizeMode="contain"
              height={200}
              width={200}
              style={[tw`w-[350px] h-[400px]`]}
            />
            </View>
          );
        })
      ) : (
        <View style={{ marginTop: 50 }}>
          <Text>No Screenshots to display</Text>
        </View>
      )}
    </View>
    </ScrollView>
  );
};

export default ScreenshotDisplay;
