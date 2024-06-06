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
  useColorScheme,
  View,
} from 'react-native';
import {colors} from './constants/color';
import FormAction from './components/FormAction';
import InputElement from './components/InputElement';

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
          {/* Text Inputs */}
          <InputElement label="First Name" required />
          <InputElement label="Last Name" required />
          <InputElement label="Email Address" required />

          {/* Radio Inputs */}
          <FormAction label="Query Type" required />
        </View>
      </View>
    </SafeAreaView>
  );
}

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
});

export default App;
