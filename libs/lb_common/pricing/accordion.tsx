import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import tw from 'twrnc';
import { pricingConfig, features } from './pricingConfig';
import PaymentButton from './paymentButton';

const AccordionElem = ({ header, body, isExpanded, onToggle }) => {
  const [heightAnimation] = useState(new Animated.Value(isExpanded ? 1 : 0));

  const toggleAccordion = () => {
    onToggle();
    Animated.timing(heightAnimation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const bodyHeight = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400], // Increased height to accommodate more content
  });

  return (
    <View style={tw`border border-gray-700 rounded-md mb-2 bg-[#1E2433]`}>
      <TouchableOpacity onPress={toggleAccordion} style={tw`p-4 flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center flex-1`}>
          {header}
        </View>
        <Text style={tw`text-lg font-bold text-white`}>{isExpanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      <Animated.View style={[tw`overflow-hidden`, { height: bodyHeight }]}>
        <View style={tw`p-4`}>{body}</View>
      </Animated.View>
    </View>
  );
};

const PlanFeatures = ({ availableFeatures, unavailableFeatures }) => {
  return (
    <View style={tw`mt-2`}>
      {availableFeatures.map((featureKey) => (
        <View key={featureKey} style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-green-500 mr-2`}>✓</Text>
          <Text style={tw`text-white`}>{features[featureKey].title}</Text>
        </View>
      ))}
      {unavailableFeatures.map((featureKey) => (
        <View key={featureKey} style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-red-500 mr-2`}>✕</Text>
          <Text style={tw`text-gray-400`}>{features[featureKey].title}</Text>
        </View>
      ))}
    </View>
  );
};

interface Plan {
  id: string;
  name: string;
  discountedPrice: number;
  originalPrice: number;
  billingCycle: string;
  recommended: boolean;
  features: {
    available: string[];
    unavailable: string[];
  };
}

const Accordion = () => {
  const recommendedIndex = Object.values(pricingConfig.plans).findIndex(plan => plan.recommended);
  const [expandedIndex, setExpandedIndex] = useState(recommendedIndex);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const accordionData = Object.entries(pricingConfig.plans).map(([key, plan], index) => ({
    header: (
      <View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-xl font-bold text-white`}>{plan.name}</Text>
          {plan.recommended && (
            <View style={tw`bg-blue-500 px-2 py-1 rounded-md`}>
              <Text style={tw`text-white text-sm`}>Recommended</Text>
            </View>
          )}
        </View>
        <View style={tw`flex-row items-center mt-1`}>
          <Text style={tw`text-white text-lg`}>
            {pricingConfig.currencySymbol}{plan.discountedPrice}
          </Text>
          {plan.originalPrice !== plan.discountedPrice && (
            <Text style={tw`text-gray-400 line-through ml-2`}>
              {pricingConfig.currencySymbol}{plan.originalPrice}
            </Text>
          )}
          <Text style={tw`text-gray-400 ml-2`}>/{plan.billingCycle}</Text>
        </View>
      </View>
    ),
    body: (
      <View>
        {plan.trialDays > 0 && (
          <Text style={tw`text-blue-400 mb-2`}>
            {plan.trialDays} days free trial
          </Text>
        )}
        <PlanFeatures
          availableFeatures={plan.features.available}
          unavailableFeatures={plan.features.unavailable}
        />
        <View style={tw`mt-2 `}>
          <PaymentButton planDetails={plan} />

    </View>
      </View>
    )
  }));

  return (
    <View style={tw`flex-1`}>
      {accordionData.map((item, index) => (
        <AccordionElem
          key={index}
          header={item.header}
          body={item.body}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </View>
  );
};

export default Accordion;
