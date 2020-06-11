import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 10,
    borderRadius: 30,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    padding: 10,
    textTransform: 'uppercase'
  },
  image: {
    width: 37,
    marginRight: 10,
    height: '100%',
  }
});

export default styles