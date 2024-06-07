import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';

const SuccessModal = () => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
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
      </View>
    </View>
  );
};

export default SuccessModal;

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
});
