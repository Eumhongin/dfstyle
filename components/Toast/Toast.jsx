import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, Easing, Image, Vibration} from 'react-native';
import colors from '@assets/colors';
import ccs from '@assets/core/coreStyle';
import * as Animated from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import images from '@assets/images';
import {__UPDATE_TOAST__} from '@dispatchers/layouts';

const ONE_SECOND_IN_MS = 1000;

export default function Toast() {
  const {isActive, type, msg} = useSelector((state) => state.layouts.toast);
  // const [timeoutId, setTimeoutId] = useState(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      Vibration.vibrate(10 * ONE_SECOND_IN_MS);
      setTimeout(() => {
        dispatch({
          type: __UPDATE_TOAST__,
          payload: {
            isActive: false,
            type: type,
            msg,
          },
        });
      }, 1300);
    } else {
      // console.log('clear time out!' , id);
      // clearTimeout(id);
      // dispatch({
      //   type: __UPDATE_TOAST__,
      //   payload: {
      //     isActive: false,
      //     type: type,
      //     message: message,
      //   },
      // });
    }

    return () => {};
  }, [isActive]);

  return (
    <Animated.View
      transition={['top', 'opacity']}
      duration={300}
      easing={Easing.bezier(0.66, 0.14, 0.34, 1.5)}
      style={[
        {
          position: 'absolute',
          // minWidth: '40%',
          maxWidth: '95%',
          borderRadius: 10,
          backgroundColor: type === 'issue' ? '#4d4d4d' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 8,
          paddingHorizontal: 10,
          alignSelf: 'center',
          zIndex: 9999,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          justifyContent: 'center',
          shadowOpacity: 0.2,
          shadowRadius: 6.27,
          elevation: 8,
          flexDirection: 'row',
        },
        isActive ? {top: 95, opacity: 1} : {top: -65, opacity: 0},
      ]}>
      {/* <Image source={images.toast[type]} style={{marginLeft: 20}} /> */}
      {/* <Animated.Text
        numberOfLines={2}
        lineBreakMode="head"
        transition="opacity"
        style={[
          ccs.NotoBold,
          ccs.f_13,
          {
            marginLeft: 10,
            marginRight: 30,
          },
          isActive ? {opacity: 1} : {opacity: 0},
          css[type],
        ]}>
        {msg}
      </Animated.Text> */}
      {/* <View
        style={{
          width: 100,
          height: 20,
          borderRadius: 5,
        }}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 5}}
          source={images.icon.load}
        />
      </View> */}
    </Animated.View>
  );
}

const css = StyleSheet.create({
  success: {
    color: '#2fa52a',
  },
  error: {
    color: colors.red,
  },
  issue: {
    color: 'white',
  },
});
