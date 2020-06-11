import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';
import { isIos } from '../../constants/device';
import styles from './styles';

interface SimpleHeaderProps {
  title?: string;
}

const HeaderWithBackButton = ({ title }: SimpleHeaderProps) => {
  const navigation = useNavigation();

  return (
    <>
      {isIos && (
        <View
          style={{
            height: getStatusBarHeight(),
            backgroundColor: colors.primary,
          }}
        />
      )}
      <View>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <AntDesign name="arrowleft" size={26} color={colors.white} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>{title || 'Título'}</Text>
          <View style={styles.rightButton} />
        </View>
      </View>
    </>
  );
};

export default HeaderWithBackButton;
