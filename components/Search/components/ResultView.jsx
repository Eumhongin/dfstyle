import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import ResultElement from './ResultElement';
import {__UPDATE_LOADING__} from '@dispatchers/layouts';

export default function ResultView() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.character.search.result);
  const timeline = useSelector(
    (state) => state.database.character.search.timeline,
  );

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: __UPDATE_LOADING__,
  //       payload: false,
  //     });
  //   }

  //   return () => {};
  // }, [data]);

  // useEffect(() => {
  //   if (timeline) {
  //     dispatch({
  //       type: __UPDATE_LOADING__,
  //       payload: false,
  //     });
  //   }
  //   return () => {};
  // }, [timeline]);

  return (
    <FlatList
      style={{marginTop: 52, flex: 1}}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.characterId}
      renderItem={({item}) => {
        return <ResultElement data={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({});
