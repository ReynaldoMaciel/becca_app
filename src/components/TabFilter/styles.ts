import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  boxItemSelected: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginRight: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  boxItem: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginRight: 10,
    borderBottomColor: colors.white,
    borderBottomWidth: 5,
  },
  textItemSelected: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '700',
  },
  textItem: {
    fontSize: 18,
    color: colors.gray[2],
    fontWeight: '300',
  }
});

export default styles