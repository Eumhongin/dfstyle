import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import Circle from './components/Circle';
import * as Animated from 'react-native-animatable';
import images from '@assets/images';
import {useSelector} from 'react-redux';

// const term = 80;

export default function Loading() {
  const isLoading = useSelector((state) => state.layouts.loading);

  return (
    <Animated.View
      transition={['bottom', 'opacity']}
      duration={400}
      easing="ease-in-out-cubic"
      style={{
        position: 'absolute',
        alignSelf: 'center',
        // opacity: test ? 1 : 0,
        bottom: isLoading ? 60 : -40,
        width: 100,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}>
      {/* <Circle delay={0} c_color c_color={'#FF982B'} />
      <Circle delay={term} c_color c_color={'#FF7E3C'} />
      <Circle delay={term * 2} c_color c_color={'#FF664E'} />
      <Circle delay={term * 3} c_color c_color={'#F44E66'} />
      <Circle delay={term * 4} c_color c_color={'#FF3371'} /> */}
      <Image
        style={{
          width: 140,
          height: 80,

          resizeMode: 'center',
          transform: [
            {
              scale: 0.4,
            },
          ],
        }}
        source={images.icon.load}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({});
