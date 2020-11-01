import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SearchView from './components/SearchView';
import ResultView from './components/ResultView';

export default function Search() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#20242A'}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={{flex: 1, backgroundColor: '#20242A', paddingTop: 40}}>
        <StatusBar barStyle="light-content" />
        <View style={{flex: 1, paddingHorizontal: 16}}>
          <SearchView />
          <ResultView />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
