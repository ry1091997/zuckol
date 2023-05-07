//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthToDp} from '../Common/Responsive';

// create a component
const Button = ({buttonText, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.opacityStyle}
        activeOpacity={0.6}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  opacityStyle: {
    width: widthToDp(90),
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: widthToDp(2),
    borderRadius: widthToDp(2),
  },
  buttonText: {
    fontSize: widthToDp(5.5),
    color: '#fff',
  },
});

//make this component available to the app
export default Button;
