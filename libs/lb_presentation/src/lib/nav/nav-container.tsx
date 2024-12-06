import tw from 'twrnc';
import { View, Text, useWindowDimensions } from 'react-native';
import {Btn} from '../ui/button';
import { useEffect, useState } from 'react';
import { useNavigate } from '../appRouter/router-utils';
import React from 'react';

const NavContainer: React.FC = (props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const links = [
    { path: '/', name: 'home' },
    { path: '/holdings', name: 'holdings' },
    { path: '/creategtt', name: 'create' },
    { path: '/global-view-widget', name: 'globalView' },
  ];
  const [activeLink, setActiveLink] = useState<
    'home' | 'holdings' | 'create' | 'globalView'
  >('home');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function changelink(link: string) {
    if (!links) return;
    const activeLinkPath = links.find((ele) => ele.name === link)?.path;
    console.log(activeLinkPath);
    if (!activeLinkPath) return;
    navigate(activeLinkPath);
    setActiveLink(link as 'home' | 'holdings' | 'create' | 'globalView');
  }

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

  return (
    <View
      style={tw`flex-row z-10 relative w-full h-15  transistion-[0.2s] p-3 shadow-md px-5 bg-blue-200 items-center justify-between`}
    >
   
      <View
        style={tw`${width > 768 ? '' : 'order-last w-full z-11'}`}
        nativeID="links"
      >
        <View
          style={[
            tw`${
              width > 768
                ? 'flex-row'
                : `flex-column bg-white items-center w-[${width}px] absolute top-[100%] -translate-x-[50%]`
            } gap-6`,
          ]}
        >
 
        </View>
      </View>

    </View>
  );
};

export default NavContainer;
