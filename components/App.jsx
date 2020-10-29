import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

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

  useEffect(() => {
    __getServerInfo();
    __getCharacterInfo();
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {servers
          ? servers.map(({serverId, serverName}, idx) => {
              return (
                <View key={idx}>
                  <Text>
                    {serverId} : {serverName}
                  </Text>
                </View>
              );
            })
          : undefined}
      </View>
      <View style={{flex: 1}}>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri:
              'http://img-api.neople.co.kr/df/servers/anton/characters/b6cc7cbfdced8f00b087af634708f718?zoom=1',
          }}
        />
        <Text>0.3초본드</Text>
        <Text>{characterInfo}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
