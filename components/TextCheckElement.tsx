import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface props {
  label: string;
  checked?: boolean;
  toggle: () => void;
  required?: boolean;
}

const TextCheckElement: React.FC<props> = ({
  label,
  checked,
  toggle,
  required,
}) => {
  return (
    <Pressable onPress={toggle} style={styles.input}>
      <Icon
        name={`${checked ? 'checkbox-marked' : 'checkbox-blank-outline'}`}
        size={25}
        color={colors.neutral.grey500}
      />
      <Text style={styles.inputText}>
        {label} {required && <Text style={styles.requiredStar}>*</Text>}
      </Text>
    </Pressable>
  );
};

const useTextCheckElement = ({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) => {
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);
  return {
    checked,
    setChecked,
    TextCheckElement: TextCheckElement({label, checked, toggle, required}),
  };
};

export default useTextCheckElement;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Karla-Regular',
    color: colors.neutral.grey900,
  },
  radioContainer: {
    gap: 15,
  },
  requiredStar: {
    color: colors.neutral.grey500,
    fontSize: 20,
  },
});
