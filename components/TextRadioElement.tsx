import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface props {
  select: string[];
}

const TextRadioElement: React.FC<props> = () => {
  return (
    <View style={styles.radioContainer}>
      <RadioElement selected label="nothing" />
      <RadioElement label="something" />
    </View>
  );
};

const useTextRadioElement = (props: props) => {
  const [selected, setSelected] = useState(null);
  return {
    TextRadioElement: TextRadioElement({...props}),
    selected: selected,
    setSelected,
  };
};

export default useTextRadioElement;

interface RadioElementProps {
  selected?: boolean;
  label: string;
}

const RadioElement: React.FC<RadioElementProps> = ({selected, label}) => {
  return (
    <View style={styles.input}>
      <Icon
        name={`radio-button-${selected ? 'on' : 'off'}`}
        size={25}
        color={colors.neutral.grey500}
      />
      <Text style={styles.inputText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBlockColor: colors.neutral.grey900,
    borderWidth: 1,
    padding: 13,
    borderRadius: 10,
    borderColor: colors.neutral.grey900,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputText: {
    fontSize: 20,
    fontFamily: 'Karla-Bold',
    borderColor: colors.neutral.grey500,
  },
  radioContainer: {
    gap: 15,
  },
});
