import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import images from '../../../constants/images';
import styles from './styles';

interface IContainerDayOrNightProps {
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

const ContainerDayOrNight = ({
  onScroll
}: IContainerDayOrNightProps) => {  

  return (
    <ScrollView pagingEnabled={true} onScroll={onScroll} horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud0}/>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud1}/>
      <FastImage resizeMode="contain" source={images.sun} style={styles.sun}/>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud2}/>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud3}/>
      <FastImage resizeMode="contain" source={images.moon} style={styles.moon}/>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud4}/>
      <FastImage resizeMode="contain" source={images.whiteCloud} style={styles.whiteCloud5}/>
    </ScrollView>
  );
};

export default ContainerDayOrNight;