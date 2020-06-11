import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';
import { RootState } from '../../store';
import { ICartItem } from '../../store/cart/types';
import styles from './styles';
import numeral from 'numeral';
import formatToCurrency from '../../utils/formatToCurrency';
import { isAndroid } from '../../constants/device';

interface BarCartProps {
  onPress: () => void;
  text: string;
}

const BarCart = ({ onPress, text }: BarCartProps) => {
  const navigation = useNavigation();
  const { bottom } = useSafeArea();

  const cart = useSelector<RootState, ICartItem[]>((state) => state.cart);

  const getTotal = () => {
    let total = numeral();
    cart.forEach((item) => {
      total = total.add(item.value);
    });
    return formatToCurrency(total);
  };

  return cart.length > 0 ? (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{
        ...styles.containerBar,
        paddingBottom: bottom + (isAndroid ? 20 : 0),
      }}>
      <View>
        <FontAwesome name="shopping-bag" size={26} color={colors.white} />
        <View style={styles.containerQuantity}>
          <Text style={styles.quantity}>{cart.length}</Text>
        </View>
      </View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.total}>{getTotal()}</Text>
    </TouchableWithoutFeedback>
  ) : null;
};

export default BarCart;
