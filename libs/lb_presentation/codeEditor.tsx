import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import NativeSyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { isRunningInApp } from '../lb_utils/src/index';
export default function CodeEditor(content: any) {
  // (isRunningInApp()) ? console.log('Running in app') : console.log('Running in web');
  return isRunningInApp() ? (
    <NativeSyntaxHighlighter
      style={tomorrowNight} wrapLines={true}  wrapLongLines={true}
      language="javascript"
      fontSize={16}
    >
      {content.content}
    </NativeSyntaxHighlighter>
  ) : (
    <ReactSyntaxHighlighter language="javascript" style={tomorrowNight} wrapLines={true} wrapLongLines={true}>
      {content.content}
    </ReactSyntaxHighlighter>
  );
}
