import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import images from '@assets/images';
import Skeleton from 'react-native-skeleton-placeholder';
import ccs from '@assets/core/coreStyle';
import colors from '@assets/colors';
import {engServerToKoServer} from '@library/functions/util';

export default function CharacterCard({
  serverId,
  characterId,
  adventureName,
  characterName,
  level,
  jobGrowName,
  jobName,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ImageBackground
      onLoadEnd={() => {
        setIsLoading(false);
      }}
      style={{
        width: '70%',
        height: 350,
        backgroundColor: '#2B3038',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        borderRadius: 13,
      }}
      imageStyle={{
        width: '100%',
        borderRadius: 13,
        resizeMode: 'cover',
      }}
      source={images.area.darkelf}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
          opacity: 0.6,
          borderRadius: 13,
        }}></View>
      {isLoading ? (
        <Skeleton>
          <Skeleton.Item width="100%" height="100%" borderRadius={13} />
        </Skeleton>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              position: 'absolute',

              left: 12,
              top: 12,
            }}>
            <Text style={[ccs.f_16, ccs.NotoThin, {color: colors.yel}]}>
              {engServerToKoServer(serverId)}
            </Text>
            <Text style={[ccs.f_10, ccs.NotoRegular, {color: 'white'}]}>
              {jobGrowName}
            </Text>
            <Text style={[ccs.f_8, ccs.NotoThin, {color: 'white'}]}>
              {jobName}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              alignItems: 'center',
              alignSelf: 'center',
              top: 50,
            }}>
            <Text style={[ccs.f_12, ccs.NotoMedium, {color: colors.yel}]}>
              Lv.{level}
            </Text>
            {adventureName ? (
              <Text style={[ccs.f_12, ccs.NotoRegular, {color: colors.grey}]}>
                {adventureName}
              </Text>
            ) : undefined}
            <Text style={[ccs.f_16, ccs.NotoMedium, {color: 'white'}]}>
              {characterName}
            </Text>
          </View>

          <Image
            style={{
              width: '80%',
              height: '80%',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 5,
            }}
            source={{
              uri: `https://img-api.neople.co.kr/df/servers/${serverId}/characters/${characterId}?zoom=3`,
            }}
          />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
