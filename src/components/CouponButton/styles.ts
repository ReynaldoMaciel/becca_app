import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 15,
    borderWidth: 1.3,
    borderColor: colors.primary,
    borderRadius: 7,
    alignItems: 'center',
  },
  boxText: {
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.gray[2],
    marginTop: 2,
  },
  arrowRight: {
    flex: 1,
    textAlign: 'right',
  }
});

export default styles