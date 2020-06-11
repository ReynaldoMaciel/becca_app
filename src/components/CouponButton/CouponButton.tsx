import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../constants/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface CouponButtonProps {
  title: string;
  subTitle: string;
  onPress: () => void;
}

const CouponButton = ({ title, subTitle, onPress }: CouponButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <Entypo name="ticket" color={colors.primary} size={34} />
      <View style={styles.boxText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <AntDesign
        style={styles.arrowRight}
        name="right"
        color={colors.primary}
        size={22}
      />
    </TouchableWithoutFeedback>
  );
};

export default CouponButton;
