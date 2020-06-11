import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import colors from '../../constants/colors';
import Button from '../Button/Button';
import styles from './styles';
import { useSafeArea } from 'react-native-safe-area-view';

interface FooterWithButtonProps {
  onPress: () => void;
  textButton: string;
}

const FooterWithButton = ({ onPress, textButton }: FooterWithButtonProps) => {
  const navigation = useNavigation();
  const { bottom } = useSafeArea();
  return (
    <View style={{ ...styles.boxFooter, paddingBottom: bottom }}>
      <View style={styles.boxFooterButton}>
        <Button bgColor={colors.green} onPress={onPress} text={textButton} />
      </View>
    </View>
  );
};

export default FooterWithButton;
