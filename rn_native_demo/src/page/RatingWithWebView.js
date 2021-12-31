import React, {Component, forwardRef, useRef, useEffect, useState} from 'react';
import {
  View,
  Keyboard,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import WebView from 'react-native-webview';

let Quill = (props, ref) => {
  // 默认的quill配置
  const options = JSON.stringify({
    placeholder: '请输入...',
    modules: {
      toolbar: [
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
    },
    ...props.options,
    theme: 'snow',
  });
  const injectedJavaScriptBeforeContentLoaded = `window.options=${options}`;
  const injectedJavaScript = `document.querySelector('#editor').children[0].innerHTML="${props.defaultValue}"`;

  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data.type === 'onChange') {
      props.onChange(data.message);
    } else if (data.type === 'receiveMessage') {
      console.log('receiveMessage', data.message);
    }
  };

  const webViewRef = useRef();
  const changeValue = value => {
    webViewRef.current.postMessage(
      JSON.stringify({
        type: 'changeVal',
        message: value,
      }),
    );
  };
  ref.current.changeValue = changeValue;

  return (
    <WebView
      ref={webViewRef}
      onMessage={onMessage}
      source={require('../assets/quill.html')}
      javaScriptEnabled
      injectedJavaScriptBeforeContentLoaded={
        injectedJavaScriptBeforeContentLoaded
      }
      injectedJavaScript={injectedJavaScript}
      style={{height: 300}}
    />
  );
};

Quill = forwardRef(Quill);

Quill.defaultProps = {
  style: {},
  defaultValue: '',
  onChange: () => {},
  changeValue: val => {},
  options: {},
};

const Rating = function (state) {
  const [text, setText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const _keyboardDidShow = e => {
    console.log('e.endCoordinates.height: ', e.endCoordinates.height);

    // 获取键盘高度
    setKeyboardHeight(e.endCoordinates.height);
  };

  const _keyboardDidHide = e => {
    setKeyboardHeight(0);
  };
  useEffect(() => {
    // 监听键盘高度
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow.bind(this),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide.bind(this),
    );
    // const keyboardDidChangeFrame = Keyboard.addListener(
    //   'keyboardDidChangeFrame',
    //   e => {
    //     console.log('aaaa', e.endCoordinates.height);
    //   },
    // );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const quillRef = useRef({});
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 300,
        }}>
        <Quill
          ref={quillRef}
          onChange={message => {
            console.log('message: ', message);
          }}
        />
      </View>

      {/* <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={-keyboardHeight}>
        <ScrollView>
        </ScrollView>
      </KeyboardAvoidingView> */}
      <View
        style={[
          styles.keyboardBar,
          {
            bottom: keyboardHeight ? keyboardHeight : -30,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            // setText(pre => {
            //   return pre + '#新增标签';
            // });
            // console.log('quillRef', quillRef);
            quillRef.current.changeValue(text + '#新增标签');
          }}>
          <View>
            <Text>标签</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  keyboardBar: {
    position: 'absolute',
    paddingLeft: 10,
    left: 0,
    right: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
  },
});
