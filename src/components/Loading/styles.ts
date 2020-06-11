import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    opacity: 0.9,
    zIndex: 2,
  },
  loadingIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    padding: 8,
    flex: 1,
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
  }
});

export default styles