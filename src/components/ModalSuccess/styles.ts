import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { deviceWidth } from '../../constants/device';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  boxModal: {
    backgroundColor: colors.white,
    width: deviceWidth - 22,
    borderRadius: 7,
    padding: 10,
  },
  boxIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -40,
  },
  descriptionContainer: {
    marginTop: 25,
    paddingHorizontal: 4,
    marginBottom: 26,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.green,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
