import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import * as Animated from 'react-native-animatable';

import colors from '@assets/colors';
import ccs from '@assets/core/coreStyle';
import images from '@assets/images';
import {useSelector, useDispatch} from 'react-redux';
import {__UPDATE_CHARACTER_SEARCH_RESULT__} from '../actionTypes/database';
import {__UPDATE_LOADING__} from '@dispatchers/layouts';

export default function SearchView() {
  const apiKey = useSelector((state) => state.config.identification.apiKey);
  const [whenTextInputFocus, setWhenTextInputFocus] = useState(false);
  const dispatch = useDispatch();

  const __searchCharacter = useCallback(
    (name) => {
      // dispatch({
      //   type: __UPDATE_LOADING__,
      //   payload: true,
      // });
      let url = `https://api.neople.co.kr/df/servers/all/characters?characterName=${name}&apikey=${apiKey}`;

      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          const {rows, error} = result;
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            // dispatch({
            //   type: __UPDATE_LOADING__,
            //   payload: false,
            // });
            dispatch({
              type: __UPDATE_CHARACTER_SEARCH_RESULT__,
              payload: rows,
            });
          }
        });
    },
    [apiKey],
  );

  const __onFocus = useCallback(() => {
    setWhenTextInputFocus(true);
  }, []);

  const __onBlur = useCallback((e) => {
    const val = e.nativeEvent.text;

    setWhenTextInputFocus(false);
    __searchCharacter(val);
  }, []);

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      {/* logo */}
      <View
        style={{
          marginTop: 24,
          width: 65,
          height: 65,
        }}>
        <Image source={images.icon.logo} />
      </View>
      {/* search */}
      <View
        style={{
          marginTop: 19,
          width: '100%',
          height: 60,
          borderRadius: 13,
          borderColor: '#FED32C',
          borderWidth: 2,
          alignItems: 'center',
          paddingHorizontal: 12,
          flexDirection: 'row',
        }}>
        <View style={{width: 24, height: 24}}>
          <Image source={images.icon.search} />
        </View>
        <View style={{marginLeft: 8, flex: 1}}>
          <Animated.Text
            transition={['opacity', 'top']}
            style={[
              ccs.NotoRegular,
              ccs.f_12,
              {
                color: 'white',
                height: whenTextInputFocus ? 16 : 0,
                opacity: whenTextInputFocus ? 1 : 0,
              },
            ]}>
            캐릭터명
          </Animated.Text>
          <TextInput
            placeholder="캐릭터명을 입력해주세요"
            style={[
              ccs.NotoRegular,
              ccs.f_12,
              {
                marginTop: whenTextInputFocus ? -2 : 0,
                color: 'white',
                padding: 0,
                height: 24,
              },
            ]}
            autoCompleteType="off"
            autoCapitalize="none"
            autoCorrect={false}
            numberOfLines={1}
            placeholderTextColor={colors.grey}
            onFocus={__onFocus}
            onBlur={__onBlur}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
