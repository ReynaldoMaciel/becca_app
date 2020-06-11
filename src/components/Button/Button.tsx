import React from 'react';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  bgColor: string;
  width?: string;
}

const Button = ({ text, onPress, bgColor, width }: ButtonProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{ ...styles.container, backgroundColor: bgColor, width }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default Button;
