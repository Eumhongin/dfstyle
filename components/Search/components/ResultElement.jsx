import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CharacterCard from './CharacterCard';
import CharacterillustCard from './CharacterillustCard';
import {useSelector, useDispatch} from 'react-redux';

export default function ResultElement({data}) {
  const apiKey = useSelector((state) => state.config.identification.apiKey);

  const [timeline, setTimeline] = useState(undefined);

  const __requestTimeline = useCallback(() => {
    const {
      serverId,
      characterId,
      characterName,
      level,
      jobId,
      jobGrowId,
      jobName,
      jobGrowName,
    } = data;

    let url = `https://api.neople.co.kr/df/servers/${serverId}/characters/${characterId}/timeline?limit=10&apikey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const {error} = result;

        if (error) {
          const {message, code} = error;
          console.log(code);
          console.log(message);
        } else {
          setTimeline(result);
        }
      });
  }, [data]);

  useEffect(() => {
    __requestTimeline();
    return () => {};
  }, []);

  return (
    <View
      style={{
        height: 380,
      }}>
      {timeline ? (
        <Carousel
          layout={'stack'}
          layoutCardOffset={`70`}
          data={[1, 2]}
          renderItem={({item, index}) => {
            const {serverId} = data;
            const {
              jobId,
              characterId,
              level,
              characterName,
              jobGrowId,
              jobGrowName,
              jobName,
              adventureName,
            } = timeline;

            if (index === 0) {
              return (
                <CharacterCard
                  data={item}
                  serverId={serverId}
                  characterId={characterId}
                  characterName={characterName}
                  level={level}
                  jobGrowName={jobGrowName}
                  jobName={jobName}
                  adventureName={adventureName}
                />
              );
            } else {
              return (
                <CharacterillustCard jobId={jobId} jobGrowId={jobGrowId} />
              );
            }
          }}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width - 30}
        />
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({});
