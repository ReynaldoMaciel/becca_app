import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { deviceWidth } from '../../constants/device';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  congratulations: {
    width: deviceWidth - 40,
    height: 350
  },
  title: {
    fontWeight: 'bold',
    color: colors.red,
    fontSize: 32,
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 18,
    color: colors.white,
    marginBottom: 8,
  },
  image: {
    height: 150,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  boxCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: getStatusBarHeight() + 100
  },
  backButton: {
    padding: 20,
  },
  boxLogin: {
    marginHorizontal: 25,
    marginBottom: 100,
  },
  linkRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center',
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
