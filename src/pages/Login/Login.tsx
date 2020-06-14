import { Link, StackActions, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput';
import Loading from '../../components/Loading/Loading';
import colors from '../../constants/colors';
import images from '../../constants/images';
import userService from '../../services/userService';
import StorageService from '../../storage/StorageService';
import { setUser } from '../../store/user/actions';
import styles from './styles';
import openMap from '../../utils/openMap';
import ModalError from '../../components/ModalError/ModalError';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonOutline from '../../components/ButtonOutline/ButtonOutline';
interface LoginProps {}

const LoginSchema = Yup.object().shape({
  tel: Yup.string().required('O campo acima é obrigatório'),
  // .email('Insira um e-mail válido'),
});

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const [showModalError, setShowModalError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: { tel: string }) => {
    try {
      setLoading(true);
      navigation.dispatch(StackActions.push('AuthSuccess', { user: { token: 'TOKEN DA API AQUI' }}))
    } catch (error) {
      setShowModalError(true);
      setMessageError(error.message || 'Erro ao realizar login');
    }
    setLoading(false);
  };

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
  <Text style={styles.title}>Olá, vamos {'\n'}começar?</Text>
        <Text style={styles.subtitle}>Digite o telefone usado para falar com a Becca</Text>
          <Formik
            initialValues={{
              tel: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}>
            {(formikProps) => (
              <>
                <FormikTextInput
                  maskType={'cel-phone'}
                  maskOptions={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}              
                  textInputProps={{
                    placeholder: 'Digite aqui seu telefone',
                  }}
                  {...formikProps}
                  field="tel"
                />
                <ButtonOutline
                  onPress={formikProps.handleSubmit}
                  text="Avançar"
                  color={colors.yellow}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
      <Loading loading={loading} text="Autenticando usuário" />
    </View>
  );
};

export default Login;
