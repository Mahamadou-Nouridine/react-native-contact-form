/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Contact Us</Text>
        <View style={styles.formActionsContainer}>
          <InputElement label="First Name" required />
          <InputElement label="Last Name" required />
          <InputElement label="Email Address" required />
        </View>
      </View>
    </SafeAreaView>
  );
}

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

const colors = {
  neutral: {
    grey900: 'hsl(187, 24%, 22%)',
    grey500: ' hsl(186, 15%, 59%)',
    white: 'hsl(0, 0%, 100%)',
  },
  primary: {
    green200: ' hsl(148, 38%, 91%)',
    green600: 'hsl(169, 82%, 27%)',
    red: 'hsl(0, 66%, 54%)',
  },
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary.green200,
    height: '100%',
    padding: 20,
  },
  formContainer: {
    backgroundColor: colors.neutral.white,
    padding: 10,
    borderRadius: 10,
    gap: 25,
  },
  formActionsContainer: {
    display: 'flex',
    gap: 20,
  },
  title: {
    color: colors.neutral.grey900,
    fontFamily: 'Karla-Bold',
    fontSize: 30,
  },
  textInputLabel: {
    fontSize: 20,
    color: colors.neutral.grey900,
    fontFamily: 'Karla-Regular',
  },
  requiredStar: {
    color: colors.neutral.grey500,
    fontSize: 20,
  },
  textInput: {
    borderColor: colors.neutral.grey900,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Karla-Regular',
  },
  inputContainer: {
    display: 'flex',
    gap: 10,
  },
});

export default App;
