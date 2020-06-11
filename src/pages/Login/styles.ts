import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: 70,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 60,
  },
  boxCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    padding: 20,
    marginTop: getStatusBarHeight()
  },
  boxLogin: {
    marginHorizontal: 25,
  },
  linkRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  showPassword: {
    position: 'absolute',
    right: 34,
    top: 0
  },
  textLinkRegister: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
