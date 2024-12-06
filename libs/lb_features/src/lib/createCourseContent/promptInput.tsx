import { Btn } from '../../../../lb_presentation/src/index';
import { Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

const PromptInput = ({ skillName, setSkillName, onStartPress }) => {
  return (
    <View>
      <TextInput
        placeholder="Skill Name"
        value={skillName}
        onChangeText={(text) => setSkillName(text)}
      />
      <Btn
        onPress={onStartPress}
        style={tw`mt-5 bg-blue-400 w-30`}
      >
        <Text style={tw`text-white font-primary font-bold`}>Enter</Text>
      </Btn>
    </View>
  );
};

export default PromptInput;
