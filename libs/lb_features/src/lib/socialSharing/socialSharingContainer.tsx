import React,{useEffect} from 'react';
import { View, Button, Alert } from 'react-native';
import * as Sharing from 'expo-sharing';

interface Props {
  url: string;
}

const SocialSharingContainer: React.FC<Props> = ({ url }) => {

  const basicShare = async () => {
    const isAvailable = await Sharing.isAvailableAsync();
    if (isAvailable) {
      await Sharing.shareAsync(url, {
        dialogTitle: 'Share this content',
        mimeType: 'text/plain',
      });
    } else {
      Alert.alert('Sharing is not available on this platform');
    }
  };

  useEffect(()=>{
    const callShare = async()=>{
      await basicShare();
    }
    callShare();
  },[])

  return (
    // <View style={{ position: 'absolute', top: 70, right: 30, width: '10%', zIndex: 1000 }}>
    //     <Button title="Share" onPress={basicShare} />
    // </View>
    <></>
  );
};

export default SocialSharingContainer;
