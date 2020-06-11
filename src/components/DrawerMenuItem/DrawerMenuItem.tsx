import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import colors from '../../constants/colors';

interface DrawerMenuItemProps {
  text: string;
  onPress?: () => void;
  testID?: string;
  showRedDot?: boolean;
}

const DrawerMenuItem = ({
  text,
  onPress,
  testID,
  showRedDot,
}: DrawerMenuItemProps) => {
  return (
    <TouchableWithoutFeedback
      testID={testID}
      style={styles.itemMenu}
      onPress={onPress}>
      {showRedDot && <View style={styles.redDot} />}
      <Text style={styles.text}>{text}</Text>
      <Entypo
        style={styles.icon}
        name="chevron-thin-right"
        size={24}
        color={colors.gray[2]}
      />
    </TouchableWithoutFeedback>
  );
};

export default DrawerMenuItem;
