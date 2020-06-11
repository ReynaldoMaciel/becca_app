import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: colors.white,
  },
  backButton: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  rightButton: {
    width: 52,
  },
  imageContainer: {
    height: 90,
  }
});

export default styles;
