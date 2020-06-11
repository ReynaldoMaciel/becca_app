import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { deviceHeight } from "../../constants/device";

const styles = StyleSheet.create({
  boxFooter: {
    borderTopColor: colors.gray[2],
    paddingHorizontal: 10,
    borderTopWidth: 0.3,
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    width: '100%',
  },
  boxFooterButton: {
    width: '50%',
  }
});

export default styles