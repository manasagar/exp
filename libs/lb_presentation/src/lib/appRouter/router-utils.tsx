import { Text,View } from "react-native";
import { NativeRouter as CommonRouter } from "react-router-native";
export * from 'react-router-dom'
export {CommonRouter}

export function Hello(){
    return(
        <View>
            <Text>Hello world from mobile</Text>
        </View>
    )
}