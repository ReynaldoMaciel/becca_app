import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { deviceWidth } from "../../../constants/device";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 0,
  },
  modalView: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: -20,
    width: deviceWidth,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  buttonDown: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  boxUser: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  userImage: {
    width: 94,
    height: 94,
    borderRadius: 50,
  },
  boxUserText: {
    flexDirection: 'column',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.red,
    paddingBottom: 6,
  },
  userLevel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.red,
    paddingBottom: 5,
  },
  userPoints: {
    fontWeight: '400',
    fontSize: 16,
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxItemText: {
    flexDirection: 'column',
    maxWidth: deviceWidth - 100
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 6,
  },
  itemSubTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray[1],
    marginBottom: 19,
  },
  buttonPodcasts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
    borderWidth: 2.5,
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    marginBottom: 50,
  },
  buttonPodcastsText: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 8,
  }
});

export default styles