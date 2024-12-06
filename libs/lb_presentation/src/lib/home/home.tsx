import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Btn } from "../ui/button";
import { Input } from '../ui/input';
import NavContainer from '../nav/nav-container';

const Home:React.FC = () => {
    return ( 
        <View>
            <Text>Home</Text>
            {/* <View style={tw`items-center gap-2 bg-blue-200`}>
                <Btn style={{}}>
                        Login
                </Btn>
                <Input />
            </View> */}
        </View>
    )
}

export default Home;
