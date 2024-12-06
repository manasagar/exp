import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import twc from 'tailwind-react-native-classnames';
import { calculateXP } from './scoring';

interface ScoringContainerProps {
  initialUserXP: number;
}

const ScoringContainer: React.FC<ScoringContainerProps> = ({ initialUserXP }) => {
  const [userXP, setUserXP] = useState<number>(initialUserXP || 0);

  const updateXP = (action: string, category?: string, actionPoints: number = 1) => {
    let xp = 0;
    let actionCategory: string | undefined = undefined;
    
    switch (action) {
      case 'viewFlashcard':
        actionCategory = 'view';
        break;
      case 'performAction':
        if (category) {
          actionCategory = category;
        } else {
          // Handle invalid or missing category
          console.error('Category is required for performing an action');
          return;
        }
        break;
      case 'reachMilestone':
        actionCategory = 'milestone';
        break;
      default:
        // Handle unknown action
        console.error('Unknown action:', action);
        return;
    }
    
    if (actionCategory) {
      xp = calculateXP(actionCategory, actionPoints);
      setUserXP(userXP + xp);
    }
  };

  return (
    <View style={[twc`p-4 bg-gray-100 rounded-lg`]}>
      <Text style={[twc`text-lg font-semibold mb-4 text-center`]}>User XP: {userXP}</Text>
      
      <TouchableOpacity onPress={() => updateXP('viewFlashcard')} style={[twc`bg-blue-500 py-3 px-6 rounded-lg mb-2`, styles.button]}>
        <Text style={[twc`text-white text-lg font-semibold text-center`]}>See Flashcard</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => updateXP('performAction', 'health')} style={[twc`bg-green-500 py-3 px-6 rounded-lg mb-2`, styles.button]}>
        <Text style={[twc`text-white text-lg font-semibold text-center`]}>Perform action related to health</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => updateXP('performAction', 'wealth')} style={[twc`bg-yellow-500 py-3 px-6 rounded-lg mb-2`, styles.button]}>
        <Text style={[twc`text-white text-lg font-semibold text-center`]}>Perform action related to wealth</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => updateXP('reachMilestone')} style={[twc`bg-purple-500 py-3 px-6 rounded-lg`, styles.button]}>
        <Text style={[twc`text-white text-lg font-semibold text-center`]}>Reach Milestone</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  button: {
    marginBottom: 10,
  },
};
export default ScoringContainer;