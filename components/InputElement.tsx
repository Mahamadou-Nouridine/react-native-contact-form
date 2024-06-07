import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import FormAction from './FormAction';
import {colors} from '../constants/color';

interface InputProps {
  label: string;
  required?: boolean;
  validationError?: boolean;
}
const InputElement: React.FC<InputProps & TextInputProps> = ({
  label,
  required,
  validationError,
  ...rest
}) => {
  return (
    <FormAction label={label} required={required}>
      <TextInput {...rest} style={styles(!!validationError).textInput} />
    </FormAction>
  );
};

const styles = (err: boolean) =>
  StyleSheet.create({
    textInput: {
      borderColor: err ? colors.primary.red : colors.neutral.grey900,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      fontSize: 20,
      fontFamily: 'Karla-Regular',
    },
  });

export default InputElement;
