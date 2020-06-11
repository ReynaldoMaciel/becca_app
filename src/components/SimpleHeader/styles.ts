import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  backButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
});

export default styles;
