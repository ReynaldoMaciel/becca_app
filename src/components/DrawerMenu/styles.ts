import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconUser: {
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    borderBottomColor: colors.gray[2],
    borderBottomWidth: 1,
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
});

export default styles