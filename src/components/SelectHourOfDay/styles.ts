import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.gray[2],
    marginVertical: 5,
  },
  buttonHour: {
    marginVertical: 5,
    marginRight: 15,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: colors.primary,
    borderWidth: 1.2,
  },
  buttonHourText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.primary
  },
  buttonHourSelected: {
    marginVertical: 5,
    marginRight: 15,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: colors.primary
  },
  buttonHourTextSelected: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white
  }
});

export default styles