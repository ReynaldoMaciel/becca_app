import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage, {Source} from 'react-native-fast-image';
import images from '../../../constants/images';
import styles from './styles';

interface HomeItemProps {
  text: string;
  icon: Source;
  navigateTo: string;
  backgroundColor: string;
}

const HomeItem = ({text, icon, navigateTo, backgroundColor}: HomeItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(navigateTo)}
      style={{...styles.container, backgroundColor}}>
      <Text style={styles.text}>{text}</Text>
      <FastImage style={styles.image} source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default HomeItem;
