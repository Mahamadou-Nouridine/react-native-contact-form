/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Pressable,
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
import useSuccessModal from './components/SuccessModal';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    queryType: null as null | number,
    message: '',
    accept: false,
  });

  const [errors, setErros] = useState({
    firstname: false,
    lastname: false,
    email: {model: false, exist: false},
    queryType: false,
    message: false,
    accept: false,
  });

  const {TextRadioElement, selected, setSelected} = useTextRadioElement({
    select: ['General Enquiry', 'Support Request'],
  });

  const {TextCheckElement, checked, setChecked} = useTextCheckElement({
    label: 'I consent to being contacted by the team',
    required: true,
  });

  useEffect(() => {
    setChecked(formData.accept);
    setSelected(formData.queryType);
  }, [setChecked, setSelected]);

  useEffect(() => {
    setFormData(data => ({...data, queryType: selected, accept: checked}));
  }, [selected, checked]);

  // handle change
  const handleChange = (
    key: 'firstname' | 'lastname' | 'email' | 'message',
    value: string,
  ) => {
    setFormData({...formData, [key]: value});
  };

  //Validate Email
  const validateEmail = () => {
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      setErros(err => {
        err.email = {...err.email, model: true};
        return err;
      });
    } else {
      setErros(err => {
        err.email = {...err.email, model: false};
        return err;
      });
    }
    if (!formData.email) {
      setErros(err => {
        err.email = {...err.email, exist: true};
        return err;
      });
    } else {
      setErros(err => {
        err.email = {...err.email, exist: false};
        return err;
      });
    }
  };

  //Validate Input
  const validateInput = (
    input: 'firstname' | 'lastname' | 'message' | 'accept',
  ) => {
    if (!formData[input]) {
      setErros(err => {
        err[input] = true;
        return err;
      });
    } else {
      setErros(err => {
        err[input] = false;
        return err;
      });
    }
  };

  //Validate Query Type
  const validateQueryType = () => {
    if (formData.queryType == null) {
      setErros({...errors, queryType: true});
    } else {
      setErros({...errors, queryType: false});
    }
  };

  useEffect(() => {
    console.log({errors});
  }, [errors]);

  const {ModalComponent, popup} = useSuccessModal();

  //Handle submit
  const handleSubmit = () => {
    for (let key of Object.keys(errors)) {
      const prop = key as
        | 'firstname'
        | 'lastname'
        | 'email'
        | 'message'
        | 'accept'
        | 'queryType';
      if (!['email', 'queryType'].includes(prop)) {
        validateInput(prop as 'firstname' | 'lastname' | 'message' | 'accept');
      }
      if (prop === 'email') {
        validateEmail();
      }
      if (prop === 'queryType') {
        validateQueryType();
      }
    }
    popup();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      {ModalComponent}
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.formContainer}>
          <Text style={styles.title}>Contact Us</Text>
          <View style={styles.formActionsContainer}>
            {/* Text Inputs */}
            <InputElement
              validationError={errors.firstname}
              onChangeText={text => {
                handleChange('firstname', text);
              }}
              value={formData.firstname}
              label="First Name"
              required
            />
            <InputElement
              validationError={errors.lastname}
              onChangeText={text => {
                handleChange('lastname', text);
              }}
              value={formData.lastname}
              label="Last Name"
              required
            />
            <InputElement
              validationError={errors.email.exist}
              emailPatern={errors.email.model}
              onChangeText={text => {
                validateEmail();
                handleChange('email', text);
              }}
              value={formData.email}
              label="Email Address"
              required
            />

            {/* Radio Inputs */}
            <FormAction label="Query Type" required>
              {TextRadioElement}
              {errors.queryType && (
                <Text style={{color: colors.primary.red}}>
                  Please select a query type
                </Text>
              )}
            </FormAction>

            {/* Text Area Inputs */}
            <FormAction label="Message" required>
              <TextInput
                onChangeText={text => {
                  handleChange('message', text);
                }}
                style={{...textInputStyle(errors.message).textInput}}
                numberOfLines={6}
                multiline
              />
              {errors.message && (
                <Text style={{color: colors.primary.red}}>
                  This field is required
                </Text>
              )}
            </FormAction>
          </View>
          <View>
            {TextCheckElement}
            {errors.accept && (
              <Text style={{color: colors.primary.red}}>
                To submit this form, please consent to being contacted
              </Text>
            )}
          </View>

          <Pressable onPress={handleSubmit} style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const textInputStyle = (err: boolean) =>
  StyleSheet.create({
    textInput: {
      borderColor: err ? colors.primary.red : colors.neutral.grey900,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      fontSize: 20,
      fontFamily: 'Karla-Regular',
      textAlignVertical: 'top',
    },
  });

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
  submitBtn: {
    backgroundColor: colors.primary.green600,
    padding: 25,
    borderRadius: 10,
  },
  submitText: {
    color: colors.neutral.white,
    fontSize: 20,
    fontFamily: 'Karla-Bold',
    textAlign: 'center',
  },
});

export default App;
