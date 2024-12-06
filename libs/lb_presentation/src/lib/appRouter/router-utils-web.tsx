import { Text,View } from "react-native";
import { BrowserRouter as CommonRouter } from "react-router-dom";
export * from 'react-router-dom'
export {CommonRouter}

export function Hello(){
    return(
        <View>
            <Text>Hello world from web</Text>
        </View>
    )
}