import { AppInstallBtn, CardHeader, CardWrapper } from '@dr/lb_presentation';
import RenderImg from 'libs/lb_utils/src/lib/renderImage';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const FocusAction = () => {
  return (
    <CardWrapper>
      <CardHeader>FOCUS = 1 Thing @ 1 Time ⏰</CardHeader>
      <AppInstallBtn
        label="📲 Install FocusTodo App"
        url="https://www.focustodo.cn/"
      />
      <Text style={tw`mb-2 self-start mt-4`}>(1) Create project, tasks 📝</Text>
      <Text style={tw`mb-4 self-start `}>
        (2) Estimate pomos & set due date 🗓️
      </Text>
      <Text style={tw`self-start `}>
        (3) Follow Pomodoro technique whenever you are working 💼
      </Text>

      <View style={tw`flex-1`}>
        <RenderImg
          imgDetails={{
            imgPath: `micros/pomo_m`,
            imgTwClasses: 'w-99 h-99',
          }}
        />
      </View>
    </CardWrapper>
  );
};

export default FocusAction;
