import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animated from 'react-native-animatable';

const duration = 500;

export default function Circle({delay, c_color}) {
  const [size, setSize] = useState(10);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    if (initial) {
      if (size === 10) {
        setTimeout(() => {
          setSize(14);
        }, duration + delay);
      } else {
        setTimeout(() => {
          setSize(10);
          setInitial(false);
        }, duration);
      }
    } else {
      if (size === 10) {
        setTimeout(() => {
          setSize(14);
        }, duration);
      } else {
        setTimeout(() => {
          setSize(10);
        }, duration);
      }
    }

    return () => {};
  }, [delay, size, initial]);

  return (
    <View
      style={{
        width: 23,
        height: 23,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        transition={['width', 'height']}
        duration={duration}
        easing="ease-in-out"
        style={{
          width: size,
          height: size,
          borderRadius: size,
          backgroundColor: c_color,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
