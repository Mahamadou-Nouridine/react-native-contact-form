import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';
import FormAction from './FormAction';
import {colors} from '../constants/color';

interface InputProps {
  label: string;
  required?: boolean;
  validationError?: boolean;
  emailPatern?: boolean;
}
const InputElement: React.FC<InputProps & TextInputProps> = ({
  label,
  required,
  validationError,
  emailPatern,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <FormAction label={label} required={required}>
      <TextInput
        {...rest}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
        style={styles(!!validationError || !!emailPatern, focus).textInput}
      />
      {(validationError && emailPatern) || validationError ? (
        <Text style={{color: colors.primary.red}}>This field is required</Text>
      ) : emailPatern ? (
        <Text style={{color: colors.primary.red}}>
          Please enter a valid email address
        </Text>
      ) : (
        ''
      )}
    </FormAction>
  );
};

const styles = (err: boolean, focus?: boolean) =>
  StyleSheet.create({
    textInput: {
      borderColor: focus
        ? colors.primary.green600
        : err
        ? colors.primary.red
        : colors.neutral.grey900,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      fontSize: 20,
      fontFamily: 'Karla-Regular',
    },
  });

export default InputElement;
