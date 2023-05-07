import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightToDp} from '../Common/Responsive';

const AuthError = props => {
  const {errorMessage} = props;
  return String(errorMessage).length ? (
    <Text style={[styles.marginVertical]}>{errorMessage}</Text>
  ) : null;
};
const AuthSucess = props => {
  const {sucessMessage} = props;
  return String(sucessMessage).length ? (
    <Text style={[styles.marginVerticalSucess]}>{sucessMessage}</Text>
  ) : null;
};

const styles = StyleSheet.create({
  marginVertical: {
    marginVertical: heightToDp(1),
    textAlign: 'center',
    color: 'red',
  },
  marginVerticalSucess: {
    marginVertical: heightToDp(1),
    textAlign: 'center',
    color: 'green',
  },
});

export {AuthError, AuthSucess};
