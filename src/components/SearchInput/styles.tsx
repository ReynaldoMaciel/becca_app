import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[0],
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  iconSearch: {
    alignSelf: 'center',
  },
  textInput: {
    color: colors.black,
    flex: 1,
    fontSize: 19,
    paddingLeft: 9,
  },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cancelIcon: {
    alignSelf: 'center',
  },
});

export default styles;
