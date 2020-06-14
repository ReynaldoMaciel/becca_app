import React from 'react';
import { TextInput, Text, TextInputProps, View } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import { InjectedFormikProps } from 'formik';
import {
  TextInputMask,
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from 'react-native-masked-text';

interface FormikTextInputProps {
  label?: string;
  field?: string;
  textInputProps?: TextInputProps;
  maskType: TextInputMaskTypeProp;
  maskOptions: TextInputMaskOptionProp;
  canEdit: bool;
  bgColor: string;
}

const FormikTextInput = ({
  label,
  field,
  touched,
  errors,
  handleChange,
  setFieldTouched,
  values,
  textInputProps,
  style,
  errorMessageStyle,
  maskType,
  maskOptions,
  canEdit,
  bgColor,
}: FormikTextInputProps & InjectedFormikProps<any, any>) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      {maskType ? (
        <TextInputMask
          editable={canEdit}
          type={maskType}
          options={maskOptions}
          value={values[field]}
          placeholderTextColor={colors.gray[1]}
          onChangeText={handleChange(field)}
          onBlur={() => setFieldTouched(field)}
          style={{ ...styles.textInput, ...style }}
          {...textInputProps}
        />
      ) : (
        <TextInput
          editable={canEdit}
          value={values[field]}
          placeholderTextColor={colors.gray[1]}
          onChangeText={handleChange(field)}
          onBlur={() => setFieldTouched(field)}
          style={{ ...styles.textInput, ...style }}
          {...textInputProps}
        />
      )}
      {touched[field] && errors[field] && (
        <Text style={{ ...styles.errorText, ...errorMessageStyle }}>
          *{errors[field]}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;
