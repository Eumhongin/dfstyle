import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import images from '@assets/images';

export default function CharacterillustCard({jobGrowId, jobId}) {
  useEffect(() => {
    console.log(jobId);
    return () => {};
  }, []);
  return (
    <ImageBackground
      style={{
        width: '70%',
        height: 350,
        backgroundColor: '#262626',
        borderRadius: 13,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
      }}
      source={
        images.job[`${jobId}`]
          ? images.job[`${jobId}`][`${jobGrowId}`]
            ? images.job[`${jobId}`][`${jobGrowId}`].illust
            : images.area.darkelf
          : images.area.darkelf
      }
      imageStyle={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 13,
        overflow: 'hidden',
      }}></ImageBackground>
  );
}

const styles = StyleSheet.create({});
