import React, { useRef, useEffect, useState } from 'react';
import { View, Button, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

import * as Sharing from 'expo-sharing';

// Import the required libraries based on the platform
const isWeb = Platform.OS === 'web';
const CanvasComponent = isWeb ? 'canvas' : require('react-native-canvas').Canvas;
const CanvasImage = isWeb ? null : require('react-native-canvas').Image;

export default function CertificateGenerationContainer(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | Canvas | null>(null);
  const [certificateDetails, setCertificateDetails] = useState<{ name: string; date: string }>({
    name: 'Participant Name',
    date: '2024-05-30',
  });

 

  useEffect(() => {
    const drawCertificate = ()=> {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (isWeb) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg'; // Replace with your actual template URL
        img.onload = () => {
          
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          // Add participant's name
          ctx.font = '30px Arial';
          ctx.fillStyle = 'black';
          
          ctx.fillText(certificateDetails.name, 50, 60);

          // Add completion date
          ctx.font = '20px Arial';
          ctx.fillText(`Completion Date: ${certificateDetails.date}`, 50, 200);
        };
      } else {
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const img = new CanvasImage(canvas);
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg'; // Replace with your actual template URL

        
        img.addEventListener('load', () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          // Add participant's name
          ctx.font = '30px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(certificateDetails.name, 50, 60);
          

          // Add completion date
          ctx.font = '20px Arial';
          ctx.fillText(`Completion Date: ${certificateDetails.date}`, 50, 200);
        });
      }
    };

    drawCertificate();
  }, [certificateDetails]);

  const saveAndShareJson = async (): Promise<void> => {
    const jsonDetails = JSON.stringify(certificateDetails);

    // seprated  logic for web and native
    if (Platform.OS === 'web') {
      // Create a download link for the web
      const link = document.createElement('a');
      link.href = `data:application/json;charset=utf-8,${encodeURIComponent(jsonDetails)}`;
      link.download = 'certificateDetails.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Save and share on mobile
      const fileUri = `${FileSystem.documentDirectory}certificateDetails.json`;
      await FileSystem.writeAsStringAsync(fileUri, jsonDetails, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      await Sharing.shareAsync(fileUri);
    }
  };

  return (
    <View style={{  alignItems: 'center', marginBottom:30 }}>
      {isWeb ? (
        <canvas ref={canvasRef} style={{ width: 300, height: 300, margin:20 }} />
      ) : (
        <CanvasComponent ref={canvasRef} style={{ width: 400, height: 600 ,marginBottom:20}} />
      )}
      <Button title="Save and Share JSON" onPress={saveAndShareJson} />


    </View>
  );
}
