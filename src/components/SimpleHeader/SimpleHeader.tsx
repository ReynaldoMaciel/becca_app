import React, { useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface SimpleHeaderProps {
  title: string;
}

const SimpleHeader = ({ title }: SimpleHeaderProps) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={navigation.goBack}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={{ ...styles.container, paddingTop: getStatusBarHeight() }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.backButton}>
          <AntDesign name="arrowleft" size={27} color={colors.white} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SimpleHeader;
