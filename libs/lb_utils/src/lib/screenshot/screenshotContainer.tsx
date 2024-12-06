import { Platform, View } from "react-native";
import { useRef, useEffect, useState } from "react";
import { screenshotUrls } from "./screenshotSlice";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";
import { useDispatch } from "react-redux";import React from "react";
;

const Screenshot = ({ children }: any) => {
  const imageRef = useRef<any>();
  const [screenshotUri, setScreenshotUri] = useState(null);
  const dispatch = useDispatch();

  const capture = async () => {
    if (Platform.OS !=="web") {
      await captureRef(imageRef, {
        height: 440,
        width: 500,
        quality: 1,
        format: 'jpg'
      })
        .then((uri) => setScreenshotUri(uri)
        )
        .catch((e) => console.error(e));
    } else {
      await domtoimage
        .toJpeg(imageRef.current, {
          height: 440,
          width: 500,
          quality: 1,
        })
        .then((uri) => 
          setScreenshotUri(uri)
        )
        .catch((e) => console.error(e));
    }
  };
  // useEffect(() => {
  //   capture();
  // }, []);

  useEffect(() => {
    if (screenshotUri) {
      dispatch(screenshotUrls(screenshotUri));
    }
  }, [screenshotUri]);
  return (
    <View ref={imageRef} onLayout={() => capture()}>
      {children}
    </View>
  );
};

export default Screenshot;
