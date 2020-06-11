import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: colors.gray[2],
    borderBottomWidth: 1.5,
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase'
  },
  icon: {
    paddingTop: 5
  },
  redDot: {
    position: 'absolute',
    zIndex: 99,
    top: 12,
    left: -11,
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 10
  }
});

export default styles