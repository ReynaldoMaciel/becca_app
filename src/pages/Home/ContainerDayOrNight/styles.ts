import { StyleSheet } from 'react-native'
import { deviceWidth } from '../../../constants/device'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  sun: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  moon: {
    width: 130,
    height: 130,
  },
  whiteCloud0: {
    width: 150,
    height: 100,
    left: 20,
  },
  whiteCloud1: {
    width: 150,
    height: 100,
    marginTop: 40,
    zIndex: 2,
    left: 60,
  },
  whiteCloud2: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  whiteCloud3: {
    width: 150,
    height: 100,
    marginTop: 30,
    left: 50
  },
  whiteCloud4: {
    width: 150,
    height: 100,
    marginBottom: 40,
    right: 50
  },
  whiteCloud5: {
    width: 150,
    height: 100,
    marginTop: 50,
    right: 20
  },
})

export default styles