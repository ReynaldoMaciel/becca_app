import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput';
import SimpleHeader from '../../components/SimpleHeader/SimpleHeader';
import colors from '../../constants/colors';
import userService from '../../services/userService';
import '../../utils/setMessagesYup';
import styles from './styles';
import validateCPF from '../../utils/validateCPF';
import ModalError from '../../components/ModalError/ModalError';
import ModalSuccess from '../../components/ModalSuccess/ModalSuccess';

interface RegisterProps {}
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  date: Yup.string()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)
    .required(),
  cpf: Yup.string()
    .required()
    .test('test-name', 'CPF inválido', function (value) {
      const { createError } = this;
      return validateCPF(value) || createError();
    }),
  cel: Yup.string().required().min(15, 'Telefone deve conter 11 números'),
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Senha precisa ter no mínimo 6 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial',
    ),
});

const Register = (props: RegisterProps) => {
  const navigation = useNavigation();
  const [showModalError, setShowModalError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const onSubmit = async ({
    name,
    date,
    cpf,
    cel,
    email,
    password,
  }: {
    name: string;
    date: string;
    cpf: string;
    cel: string;
    email: string;
    password: string;
  }) => {
    try {
      const formatedDate = date.split('/').reverse().join('-');
      const formatedCPF = cpf.replace(/\W+/g, '');
      const formatedCel = cel.replace(/\W+/g, '');
      await userService.register({
        name,
        date: formatedDate,
        cpf: formatedCPF,
        cel: formatedCel,
        email,
        password,
      });
      setShowModalSuccess(true);
    } catch (error) {
      console.log(error);
      setShowModalError(true);
      setMessageError(
        error.message ||
          'Ocorreu um erro inesperado, tente novamente mais tarde',
      );
    }
  };
  return (
    <>
      <ModalSuccess
        description="Usuário cadastrado com sucesso, verifique seu email para mais informações"
        onDissmis={() => {
          navigation.goBack();
        }}
        title="Sucesso!"
        visible={showModalSuccess}
      />
      <ModalError
        description={messageError}
        onDissmis={() => setShowModalError(false)}
        title="Erro"
        visible={showModalError}
      />
      <SimpleHeader title="Crie sua conta" />
      {/* <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={30}> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crie sua conta</Text>
        </View>
        <Formik
          initialValues={{
            name: '',
            date: '',
            cpf: '',
            cel: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}>
          {(formikProps) => (
            <>
              <FormikTextInput
                textInputProps={{
                  placeholder: 'Nome',
                }}
                {...formikProps}
                field="name"
              />
              <FormikTextInput
                maskType={'datetime'}
                maskOptions={{
                  format: 'DD/MM/YYYY',
                }}
                textInputProps={{
                  placeholder: 'Data de nascimento',
                }}
                {...formikProps}
                field="date"
              />
              <FormikTextInput
                maskType={'cpf'}
                textInputProps={{
                  placeholder: 'CPF',
                }}
                {...formikProps}
                field="cpf"
              />
              <FormikTextInput
                maskType={'cel-phone'}
                maskOptions={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                textInputProps={{
                  placeholder: 'Celular',
                }}
                {...formikProps}
                field="cel"
              />
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
                text="Criar Conta"
                bgColor={colors.green}
              />
            </>
          )}
        </Formik>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default Register;
