import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
  title: {
    flex: 9,
    paddingLeft: 15,
    fontSize: 18,
    color: colors.white,
  },
  searchButton: {
    flex: 1,
    // alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 23,
    paddingHorizontal: 20,
  },
});

export default styles;
