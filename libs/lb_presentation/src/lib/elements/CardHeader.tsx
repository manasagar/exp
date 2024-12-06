import { HtmlRenderer } from "../../../../lb_utils/src/index";
import React from "react"
import { View, Text } from "react-native"
import tw from 'twrnc'

interface CardHeaderProps {
    children: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return (
        <View>
            <Text
                style={tw`text-center text-xl bg-yellow-200 border-b border-gray-300 p-2 mb-4`}
            >
                 <HtmlRenderer htmlContent={children} />
               
            </Text>
        </View>
    )
}

export default CardHeader