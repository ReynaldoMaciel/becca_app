import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/device";

const styles = StyleSheet.create({
  containerBar: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  containerQuantity: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray[1]
  },
  quantity: {
    color: colors.black,
    textAlign: 'center',
  },
  text: {
    position: 'absolute',
    top: 20,
    width: deviceWidth,
    left: 0,
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
  },
  total: {
    fontSize: 18,
    color: colors.white,
  }
});

export default styles