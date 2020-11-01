import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {composeWithDevTools} from 'redux-devtools-extension';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import rootReducer from '../reducer';
import Search from './Search/Search';
import Toast from './Toast/Toast';
import Loading from './Loading/Loading';

const myStore = createStore(rootReducer, composeWithDevTools());
const Stack = createStackNavigator();
const apiKey = 'exlublKURdfjHJrGe41zD7dTDsbfKTCF';

export default function App() {
  const [servers, setServers] = useState(undefined);
  const [characterInfo, setCharacterInfo] = useState('');

  const __getServerInfo = useCallback(() => {
    let url = `https://api.neople.co.kr/df/servers?apikey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then(({rows}) => {
        setServers(rows);
      });
  }, []);

  const __getCharacterInfo = useCallback(() => {
    const server = 'anton';
    const characterId = 'b6cc7cbfdced8f00b087af634708f718';
    let url = `https://api.neople.co.kr/df/servers/${server}/characters/${characterId}?apikey=exlublKURdfjHJrGe41zD7dTDsbfKTCF`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCharacterInfo(JSON.stringify(result));
      });
  }, []);

  // useEffect(() => {
  //   __getServerInfo();
  //   __getCharacterInfo();
  //   return () => {};
  // }, []);

  return (
    <Provider store={myStore}>
      <MyNavigator />
    </Provider>
  );
}

const MyNavigator = () => {
  return (
    <NavigationContainer>
      <SwitchNavigation />
      <Toast />
      <Loading />
    </NavigationContainer>
  );
};

const SwitchNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="search">
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
