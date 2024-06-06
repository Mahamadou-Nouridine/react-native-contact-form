import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import FormAction from './FormAction';
import {colors} from '../constants/color';

interface InputProps {
  label: string;
  required?: boolean;
}
const InputElement: React.FC<InputProps & TextInputProps> = ({
  label,
  required,
}) => {
  return (
    <FormAction label={label} required={required}>
      <TextInput style={styles.textInput} />
    </FormAction>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.neutral.grey900,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Karla-Regular',
  },
});

export default InputElement;
