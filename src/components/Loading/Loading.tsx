import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Loading = ({ loading, text }: { loading: boolean; text?: string }) => (
  <>
    {loading && (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.loadingIcon}
          color={colors.white}
          size="large"
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    )}
  </>
);

export default Loading;
