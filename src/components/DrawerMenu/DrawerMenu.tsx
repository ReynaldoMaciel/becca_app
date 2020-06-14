import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import colors from '../../constants/colors';
import {removeToken} from '../../store/user/actions';
import DrawerMenuItem from '../DrawerMenuItem/DrawerMenuItem';
import styles from './styles';

const DrawerMenu = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(removeToken());
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <TouchableWithoutFeedback style={styles.iconUser}>
        <FontAwesome name="user-circle-o" size={140} color={colors.black} />
      </TouchableWithoutFeedback>
      <DrawerMenuItem text="Home" onPress={() => navigation.navigate('Home')} />
      {/* <DrawerMenuItem
        text="Finalizar cadastro"
        onPress={() => navigation.navigate('FinishRegisterStackScreen')}
      />
      <DrawerMenuItem
        text="Alterar Senha"
        onPress={() => navigation.navigate('ChangePassword')}
      />
      <DrawerMenuItem
        text="Notificações"
        onPress={() => navigation.navigate('NotificationsStackScreen')}
      /> */}
      <DrawerMenuItem text="Sair" onPress={logout} />
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
