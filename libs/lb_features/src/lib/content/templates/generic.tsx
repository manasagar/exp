import React, { useEffect } from 'react';
import { View, Text, Pressable, Image, Platform } from 'react-native';
import tw from 'twrnc';


import { AppInstallBtn } from "../../../../../lb_presentation/src/index";
import { CardHeader } from "../../../../../lb_presentation/src/index";
import { CardWrapper } from "../../../../../lb_presentation/src/index";
import { Fact } from "../../../../../lb_presentation/src/index";

import { HtmlRenderer } from "../../../../../lb_utils/src/index";
import { RenderImg } from "../../../../../lb_utils/src/index";

import FormContainer from './formContainer';
import QuizForm from './quizForm';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProgressBar from '../top-progres';
import CodeEditor from '../../../../../lb_presentation/codeEditor';
import Screenshot from 'libs/lb_utils/src/lib/screenshot/screenshotContainer';

const GenericRender = ({ data, onNextButtonClick, currentSegmentIndex }) => {
  const totalSegments = 4;
  const percentage = ((currentSegmentIndex + 1) / totalSegments) * 100;

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true,
    },
  };
  const renderButton = (label, onPress, emoji, style) => (
    <Pressable style={style.button} onPress={onPress}>
      <Text style={style.label}>{label}</Text>
      <Text style={style.emoji}>{emoji}</Text>
    </Pressable>
  );
  
  return (
    <CardWrapper>
      {data.map((item, index) => {
        switch (item.type) {
          case 'title':
            return <Text style={tw`text-white`}> {item.content}</Text>;
          case 'installBtn':
            return (
              <View key={index} style={tw`mt-4`}>
                <AppInstallBtn
                  label={<HtmlRenderer key={index} htmlContent={item.label} />}
                  url={item.url}
                  wrapperTwClasses={item.wrapperTwClasses}
                />
              </View>
            );
          case 'image':
            return (
              <RenderImg
                key={index}
                imgDetails={item.imgDetails}
                style={item?.style}
                events={item.events} // Pass events object to RenderImg
              />
            );
          case 'generic':
            return (
              <View key={index} style={tw`mt-0 mb-0`}>
                {item.content.title && (
                  <Text style={[tw`mt-0 mr-5 bg-[#202F36] ml-5 flex items-center text-[#FEEFEF] font-bold pl-5`]}>
                    <HtmlRenderer htmlContent={`
                   <div style="font-size: 15px;">
                     ${item.content.title}
                   </div>
                 `} />
                  </Text>


                )}
                {item.content.body && (
                  <Text style={[tw`text-[10] mt-0 mr-5 bg-[#202F36] ml-5 flex items-center text-[#938989]  pl-5 pb-5`, { fontSize: 100 }]}>
                    <HtmlRenderer htmlContent={`
                   <div style="font-size: 12px;">
                     ${item.content.body}
                   </div>
                 `} />
                  </Text>
                )}
                {item.content.qn && (
                  <>
                    
                    <View style={tw`mt-5 p-0 mb-0 text-white flex-row items-center `}>
                      {/* Your elements */}
                      <Image source={require('../../../assets/ICON.png')} style={{ height: 170, width: 120, marginLeft: 20, marginRight: 0 }} />

                      <View style={{
                        position: 'relative',
                        margin: 0,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#38464f',
                        borderRadius: 30,
                        padding: 10,
                        paddingHorizontal: 30,
                        marginBottom: 60
                      }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}>{item.content.qn}</Text>
                        <View style={{
                          position: 'absolute',
                          left: 15,
                          bottom: -30,
                          width: 0,
                          height: 0,
                          borderTopWidth: 15,
                          borderTopColor: '#38464f',
                          borderRightWidth: 15,
                          borderRightColor: 'transparent',
                          borderBottomWidth: 15,
                          borderBottomColor: 'transparent',
                          borderLeftWidth: 15,
                          borderLeftColor: 'transparent',
                        }} />
                        <View style={{
                          position: 'absolute',
                          left: 15,
                          bottom: -28,
                          width: 0,
                          height: 0,
                          borderTopWidth: 15,
                          borderTopColor: '#092635',
                          borderRightWidth: 15,
                          borderRightColor: 'transparent',
                          borderBottomWidth: 15,
                          borderBottomColor: 'transparent',
                          borderLeftWidth: 15,
                          borderLeftColor: 'transparent',
                        }} />
                      </View>
                    </View>
                  </>
                )}
                {item.content.ans && (
                  <View style={[tw`mt-5 p-0 mb-0 text-white flex-row items-center bg-[#202F36] ml-5 mr-5 rounded-t-[5]  `, { borderTopColor: '#000', borderTopWidth: '2px' }]}>
                    <Text style={tw`mt-5 mx-5 mb-0 text-white font-normal text-center mb-5 text-lg leading-tight tracking-tight`}>
                      <HtmlRenderer
                        htmlContent={`
                                       <div> <p style="text-align: left;">${item.content.ans}</p>  </div>`}
                      />
                    </Text>

                  </View>
                )}

                {item.content.jo_qn && (
                  <Text style={tw`mt-10 p-4 mb-0 text-white bg-[#186CBA] rounded-t-lg font-bold text-center ml-5 mr-5`}>
                    <HtmlRenderer htmlContent={item.content.jo_qn} />
                  </Text>
                )}
                {item.content.jo_ans && (
                  <Text style={tw`mt-0 p-1 mb-0 text-black font-normal text-center h-50 bg-gray-100 text-lg ml-5 mr-5`}>
                    <HtmlRenderer htmlContent={item.content.jo_ans} />
                  </Text>
                )}
                {item.content.html && (
                  <View style={tw`mt-0 mb-1 ml-5 mr-5 bg-gray-100 rounded-b-lg`}>
                    <HtmlRenderer htmlContent={item.content.html} />
                  </View>
                )}
                {item.content.sessionTitle && (
                  <View style={tw`p-2 w-full bg-[#24353E] flex-row items-center rounded-b-5 justify-center`} >
                    <AntDesign name="left" size={16} color="#e6e6e6" style={{ color: '#e6e6e6', marginLeft: 5 }}/>
                    <Text style={tw`p-2 text-5 text-[#fff] font-bold flex-1 text-center`}>
                      {item.content.sessionTitle}
                    </Text>
                  </View>


                )}
                {item.content.qz_qn && (
                  <>
                    <ProgressBar percentage={percentage} style={{ margin: 15 }} />

                    <View style={tw`mt-5 p-0 mb-5 text-white flex-row items-center `}>
                      {/* Your elements */}
                      <Image source={require('../../../assets/ICON.png')} style={{ height: 120, width: 80, marginLeft: 20, marginRight: 0 }} />

                      <View style={{
                        position: 'relative',

                        margin: 0,
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderColor: '#38464f',
                        borderRadius: 30,
                        width: 270,
                        padding: 10,
                        paddingHorizontal: 30
                      }}>
                        <Text style={{ textAlign: 'left', fontSize: 18, color: 'white' }}>{item.content.qz_qn}</Text>
                        <View style={{
                          position: 'absolute',
                          left: 15,
                          bottom: -30,
                          width: 0,
                          height: 0,
                          borderTopWidth: 15,
                          borderTopColor: '#38464f',
                          borderRightWidth: 15,
                          borderRightColor: 'transparent',
                          borderBottomWidth: 15,
                          borderBottomColor: 'transparent',
                          borderLeftWidth: 15,
                          borderLeftColor: 'transparent',
                        }} />
                        <View style={{
                          position: 'absolute',
                          left: 15,
                          bottom: -28,
                          width: 0,
                          height: 0,
                          borderTopWidth: 15,
                          borderTopColor: '#092635',
                          borderRightWidth: 15,
                          borderRightColor: 'transparent',
                          borderBottomWidth: 15,
                          borderBottomColor: 'transparent',
                          borderLeftWidth: 15,
                          borderLeftColor: 'transparent',
                        }} />
                      </View>
                    </View>
                  </>
                )}
                {item.content.code && (
                  <View>
                    <View style={[tw`bg-[#202F36] ml-5 mr-5 pb-5 rounded-b-[2]`, {

                      borderBottomColor: "black", borderBottomWidth: '5px' // Elevation for Android
                    }]}>
                      <View style={{ borderColor: '#AEAEAE', borderWidth: 1, width: '95%', borderRadius: 10, alignSelf: 'center' }}>
                        <CodeEditor content={item.content.code} />
                      </View>
                    </View>
                    <Pressable
                      onPress={onNextButtonClick} // Trigger the callback when the button is clicked
                      style={{
                        backgroundColor: '#93d334',
                        padding: 5,
                        marginTop: 20,
                        marginBottom: 10,
                        borderColor: 'green',
                        borderRadius: 10,
                        alignItems: 'center',
                        borderWidth: 1,
                        marginLeft: 30,
                        marginRight: 30,
                        borderBottomWidth: 4,
                      }}><Text style={{ margin: 5, fontSize: 20 }}>Continue</Text></Pressable>
                  </View>
                )}
                {item.content.qz_options && <QuizForm item={item} onNextButtonClick={onNextButtonClick} />}
              </View>
            );

          case 'fact':
            return (
              <Fact key={index} style={item?.style}>
                {item.content}
              </Fact>
            );
          case 'text':
            return (
              <Text key={index} style={item?.style}>
                <HtmlRenderer key={index} htmlContent={item.content} />
              </Text>
            );
          case 'sessionTitle':
            return (
              <Text key={index} style={item?.style}>
                <HtmlRenderer key={index} htmlContent={item.content} />
              </Text>
            );
          case 'qa':
            return (
              <View style={item.style}>
                <Text>
                  <HtmlRenderer key={index} htmlContent={item.content.q} />
                </Text>

                <Text>
                  <HtmlRenderer key={index} htmlContent={item.content.a} />
                </Text>
              </View>
            );
          case 'list':
            return (
              <View key={index} style={item.style}>
                {item.items.map((text, idx) => (
                  <Text key={idx} style={tw`mb-1`}>
                    <HtmlRenderer key={index} htmlContent={text} />
                  </Text>
                ))}
              </View>
            );

          case `numbered-list`:
            return (
              <View key={index} style={item.style}>
                {item.items.map((text, idx) => (
                  <View style={tw.style(`flex-1 justify-center items-center`)}>
                    <View
                      style={tw.style(
                        `bg-green-500 rounded-lg p-4 flex-row items-center`
                      )}
                    >
                      <View
                        style={tw.style(
                          `bg-yellow-500 rounded-full w-10 h-10 justify-center items-center mr-4`
                        )}
                      >
                        <Text
                          style={tw.style(`text-white text-center font-bold`)}
                        >
                          1
                        </Text>
                      </View>
                      <Text style={tw.style(`text-white text-lg font-bold`)}>
                        {text}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            );

          case 'button':
            return (
              <View key={index} style={tw`mt-10 mb-5 `}>
                {/* {renderButton(item.label, item.onPress, item.emoji, item.style)} */}
              </View>
            );

          case 'html':
            return (
              <HtmlRenderer
                renderersProps={renderersProps}
                htmlContent={item.content}
                containerStyle={tw`${item.style}`}
              />
            );

          case 'form':
            return <FormContainer formData={item} />;
          default:
            return null;
        }
      })}
    </CardWrapper>
  );
};

export default GenericRender;