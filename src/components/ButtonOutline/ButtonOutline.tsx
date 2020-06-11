import React from 'react';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

interface ButtonOutlineProps {
  text: string;
  onPress: () => void;
  color: string;
  width?: string;
}

const ButtonOutline = ({ text, onPress, color, width }: ButtonOutlineProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{ ...styles.container, borderColor: color, width }}>
      <Text style={{ ...styles.text, color }}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default ButtonOutline;
