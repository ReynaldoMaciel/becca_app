import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // borderTopColor: colors.gray[1],
    // borderTopWidth: 0.7,
  },
  containerList: {
    paddingBottom: 150
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderTopColor: colors.gray[1],
    borderTopWidth: 0.6,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.gray[0]
  },
  boxLeft: {
    flex: 1,
  },
  boxRight: {
    flex: 4,
    paddingLeft: 20,
  },
  salonName: {
    fontSize: 18,
    flexGrow: 1,
    fontWeight: '700',
    color: colors.gray[2]
  },
  iconStar: {
    // paddingLeft: 10
  },
  rate: {
    color: 'orange',
    fontWeight: '400',
    fontSize: 15,
    paddingLeft: 4
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceName: {
    color: colors.gray[2],
    fontSize: 16,
    marginVertical: 1,
  },
  location: {
    color: colors.gray[2],
    fontSize: 16,
    marginVertical: 2,
  },
  price: {
    color: colors.gray[2],
    fontSize: 20,
    textAlign: 'right',
    marginTop: 6,
  },
});

export default styles

