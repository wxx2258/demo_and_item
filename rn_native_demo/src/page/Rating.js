import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Keyboard,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

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
  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{flex: 1}}
        keyboardVerticalOffset={-keyboardHeight}>
        <ScrollView>
          <TextInput
            multiline={true}
            onChangeText={text => setText(text)}
            placeholder={'输入框'}
            secureTextEntry={true}
            value={text}
            style={styles.textInput}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={[
          styles.keyboardBar,
          {
            bottom: keyboardHeight ? keyboardHeight : -30,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            setText(pre => {
              return pre + '#新增标签';
            });
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
