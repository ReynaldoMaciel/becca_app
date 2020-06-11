import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  }, boxButtonDay: {

  },
  dayLabel: {
    fontWeight: '800',
    fontSize: 19,
    textAlign: 'center',
    color: colors.gray[2],
    marginBottom: 10,
  },
  buttonArrow: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  buttonDaySelected: {
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  buttonDayTextSelected: {
    color: colors.white,
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '400'
  },
  buttonDay: {
    borderRadius: 6,
  },
  buttonDayText: {
    color: colors.gray[2],
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '400'
  }
});

export default styles