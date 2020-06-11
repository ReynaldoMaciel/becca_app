import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: colors.gray[0],
    color: colors.black,
    fontSize: 20,
    padding: 15,
    borderRadius: 3,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    padding: 3,
  },
});

export default styles;
