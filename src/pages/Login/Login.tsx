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
interface LoginProps {}

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('O campo acima é obrigatório'),
  // .email('Insira um e-mail válido'),
  password: Yup.string()
    .required('O campo acima é obrigatório')
    .min(6, 'Senha muito curta'),
});

const Login = (props: LoginProps) => {
  const navigation = useNavigation();
  const [showModalError, setShowModalError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      dispatch(
        setUser({
          refreshToken: '',
          token: 'asdasdfad',
          userId: 'asdf'
        }),
      );
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
      {navigation.canGoBack() && (
        <TouchableWithoutFeedback
          style={styles.backButton}
          onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={28} color={colors.primary} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.boxCenter}>
        <FastImage
          source={images.logoIcon}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.boxLogin}>
          <Formik
            initialValues={{
              email: 'admin@email.com',
              password: 'Trocar@123',
            }}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}>
            {(formikProps) => (
              <>
                <FormikTextInput
                  textInputProps={{
                    placeholder: 'Email',
                  }}
                  {...formikProps}
                  field="email"
                />
                <FormikTextInput
                  textInputProps={{
                    placeholder: 'Senha',
                    secureTextEntry: true,
                  }}
                  {...formikProps}
                  field="password"
                />
                <Button
                  onPress={formikProps.handleSubmit}
                  text="Entrar"
                  bgColor={colors.primary}
                />
              </>
            )}
          </Formik>
        </View>
        <Link style={styles.linkRegister} to="/Register">
          <Text style={styles.textLinkRegister}>Crie sua conta</Text>
        </Link>
      </View>
      <Loading loading={loading} text="Autenticando usuário" />
    </View>
  );
};

export default Login;
