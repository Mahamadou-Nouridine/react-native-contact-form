import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface props {
  select: string[];
  selected: number | null;
  selectGenerator: (index: number) => () => void;
}

const TextRadioElement: React.FC<props> = ({
  selected,
  select,
  selectGenerator,
}) => {
  return (
    <View style={styles.radioContainer}>
      {select.map((el, index) => (
        <RadioElement
          onSelect={selectGenerator(index)}
          key={index}
          selected={selected === index}
          label={el}
        />
      ))}
    </View>
  );
};

const useTextRadioElement = (props: Pick<props, 'select'>) => {
  const [selected, setSelected] = useState<null | number>(null);
  const selectGenerator = (index: number) => {
    return () => setSelected(index);
  };
  return {
    TextRadioElement: TextRadioElement({...props, selected, selectGenerator}),
    selected: selected,
    setSelected,
  };
};

export default useTextRadioElement;

interface RadioElementProps {
  selected?: boolean;
  label: string;
  onSelect: () => void;
}

const RadioElement: React.FC<RadioElementProps> = ({
  selected,
  label,
  onSelect,
}) => {
  return (
    <Pressable onPress={onSelect} style={styles.input}>
      <Icon
        name={`radio-button-${selected ? 'on' : 'off'}`}
        size={25}
        color={colors.neutral.grey500}
      />
      <Text style={styles.inputText}>{label}</Text>
    </Pressable>
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
