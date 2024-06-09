import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/color';

interface FormaActionProps {
  label: string;
  required?: boolean;
  children?: React.ReactNode;
}

const FormAction: React.FC<FormaActionProps> = ({
  children,
  label,
  required,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textInputLabel}>
        {label} {required && <Text style={styles.requiredStar}>*</Text>}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputLabel: {
    fontSize: 20,
    color: colors.neutral.grey500,
    fontFamily: 'Karla-Bold',
  },
  requiredStar: {
    color: colors.neutral.grey500,
    fontSize: 20,
  },
  inputContainer: {
    display: 'flex',
    gap: 10,
  },
});

export default FormAction;
