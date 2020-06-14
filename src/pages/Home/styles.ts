import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../constants/device";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  assistant: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    position: 'absolute',
    top: 250
  },
  backgroundImage: {
    width: deviceWidth,
    height: deviceHeight,
    flex: 1,
  },
  boxTalk: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.dark,
    paddingTop: 25,
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: deviceWidth,
  },
  title: {
    fontSize: 32,
    color: colors.red,
    fontWeight: '700',
    marginBottom: 8
  },
  subTitle: {
    fontSize: 14,
    color: colors.white
  },
  boxButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageIcon: {
    backgroundColor: colors.yellow,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60
  },
  sideButton: {
    backgroundColor: colors.red,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60
  },
  buttonShowMore: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30
  },
});

export default styles