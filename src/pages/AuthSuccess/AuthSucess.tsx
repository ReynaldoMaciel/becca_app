import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonOutline from '../../components/ButtonOutline/ButtonOutline';
import Loading from '../../components/Loading/Loading';
import ModalError from '../../components/ModalError/ModalError';
import colors from '../../constants/colors';
import styles from './styles';
import { setUser } from '../../store/user/actions';
import Button from '../../components/Button/Button';
import FastImage from 'react-native-fast-image';
import images from '../../constants/images';

const AuthSuccess = ({ route } : { route: any }) => {
  const navigation = useNavigation();
  const [showModalError, setShowModalError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <ModalError
        description={messageError}
        onDissmis={() => setShowModalError(false)}
        title="Erro"
        visible={showModalError}
      />
      <View style={styles.boxCenter}>
        <View style={styles.boxLogin}>
          <FastImage resizeMode="contain" source={images.congratulations} style={styles.congratulations} />
          <Text style={styles.title}>Parabéns!</Text>
          <Text style={styles.subtitle}>Seu cadastro foi concluído com sucesso!</Text>  
          <>
            <Button
              onPress={() => {
                dispatch(setUser(route.params.user))
              }}
              text="Começar"
              bgColor={colors.yellow}
            />
          </>
        </View>
      </View>
      <Loading loading={loading} text="Autenticando usuário" />
    </View>
  );
};

export default AuthSuccess;
