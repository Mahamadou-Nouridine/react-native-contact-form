/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {colors} from './constants/color';
import FormAction from './components/FormAction';
import InputElement from './components/InputElement';
import useTextRadioElement from './components/TextRadioElement';
import useTextCheckElement from './components/TextCheckElement';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {TextRadioElement} = useTextRadioElement({
    select: ['General Enquiry', 'Support Request'],
  });

  const {TextCheckElement} = useTextCheckElement({
    label: 'I consent to being contacted by the team',
    required: true,
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Contact Us</Text>
          <View style={styles.formActionsContainer}>
            {/* Text Inputs */}
            <InputElement label="First Name" required />
            <InputElement label="Last Name" required />
            <InputElement label="Email Address" required />

            {/* Radio Inputs */}
            <FormAction label="Query Type" required>
              {TextRadioElement}
            </FormAction>

            {/* Text Area Inputs */}
            <FormAction label="Message" required>
              <TextInput style={styles.textInput} numberOfLines={6} multiline />
            </FormAction>
          </View>
          {TextCheckElement}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary.green200,
    height: '100%',
    justifyContent: 'center',
  },
  formContainer: {
    margin: 20,
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
  textInput: {
    borderColor: colors.neutral.grey900,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Karla-Regular',
    textAlignVertical: 'top',
  },
});

export default App;
