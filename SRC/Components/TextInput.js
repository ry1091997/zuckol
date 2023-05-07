//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {widthToDp} from '../Common/Responsive';

// create a component
const TextInputForm = ({
  text,
  fontStyle = widthToDp(5.5),
  showHeadingOnly = false,
  //   maximuCharacter,
  onChangeText,
  myTextInput,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={{...styles.titleStyle, ...{fontSize: fontStyle}}}>
            {text}
          </Text>
        </View>
        {!showHeadingOnly ? (
          <View style={styles.inputContainer1}>
            <TextInput
              ref={myTextInput}
              placeholder={text}
              style={styles.inputContainer}
              multiline={true}
              onChangeText={onChangeText}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: '#2c3e50',
    // marginBottom: widthToDp(5),
    width: widthToDp(90),
  },
  subContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: widthToDp(5.5),
  },
  inputContainer1: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  inputContainer: {
    borderWidth: widthToDp(0.3),
    // textAlign: 'center',
    width: widthToDp(90),
    borderRadius: widthToDp(2),
    fontSize: widthToDp(5),
  },
});

//make this component available to the app
export default TextInputForm;
