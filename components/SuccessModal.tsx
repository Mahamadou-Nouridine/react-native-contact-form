import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';

const useSuccessModal = () => {
  const position = useRef(new Animated.Value(-110)).current;

  const popup = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    const t = setTimeout(() => {
      Animated.timing(position, {
        toValue: -110,
        duration: 200,
        useNativeDriver: true,
      }).start();
      clearTimeout(t);
    }, 3000);
  };

  const closePopup = () => {
    Animated.timing(position, {
      toValue: -110,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return {
    popup,
    ModalComponent: (
      <View style={styles.modalContainer}>
        <Animated.View
          style={{...styles.modal, transform: [{translateY: position}]}}>
          <Icon
            style={styles.closeIcon}
            color={colors.primary.red}
            name="close-circle-outline"
            onPress={() => closePopup()}
          />
          <View style={styles.modalTitle}>
            <Icon
              style={styles.icon}
              color={colors.neutral.white}
              name="checkmark-circle-outline"
            />
            <Text style={styles.modalText}>Message Sent!</Text>
          </View>
          <Text style={styles.modalDescriptionText}>
            Thanks for completing the form. We'll be in touch soon!
          </Text>
        </Animated.View>
      </View>
    ),
  };
};

export default useSuccessModal;

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // transform: [{translateX: 50}],
  },

  modal: {
    backgroundColor: colors.neutral.grey900,
    opacity: 0.9,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'relative',
  },
  modalText: {
    color: colors.neutral.white,
    fontSize: 20,
    fontFamily: 'Karla-Bold',
  },
  modalTitle: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    fontFamily: 'Karla-Bold',
    fontWeight: 900,
  },
  modalDescriptionText: {
    color: colors.neutral.white,
    fontSize: 15,
    fontFamily: 'Karla-Bold',
  },
  closeIcon: {
    fontSize: 25,
    fontFamily: 'Karla-Bold',
    fontWeight: 900,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
