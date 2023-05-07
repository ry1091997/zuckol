//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthToDp} from '../Common/Responsive';
import CustomModal from './modal';

// create a component
const List = ({item}) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View styles={styles.headingContainerStyle}>
          <Text style={styles.headingStyle}>{item?.heading}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setShowImage(true)}>
            <Image
              source={{uri: item?.mediaId?.path}}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.authContainer}>
          <Text style={styles.authContainerText}>Author: {item.auth}</Text>
        </View>
        <View style={styles.contContainer}>
          <Text style={styles.contContainerText}>{item?.cont}</Text>
        </View>
        {showImage ? (
          <CustomModal
            modalVisible={showImage}
            onRequestClose={() => setShowImage(!showImage)}>
            <Image
              style={styles.fullImage}
              source={{uri: item?.mediaId?.path}}
            />
          </CustomModal>
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
    alignItems: 'center',
    marginTop: widthToDp(5),
    width: widthToDp(97),
    borderWidth: widthToDp(0.2),
    paddingVertical: widthToDp(2),
    borderRadius: widthToDp(2),
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: widthToDp(2),
  },
  imageContainer: {
    backgroundColor: '#2c3e50',
    width: widthToDp(94),
    height: widthToDp(50),
    borderWidth: widthToDp(0.2),
    borderRadius: widthToDp(2),
    overflow: 'hidden',
  },
  imageStyle: {
    width: widthToDp(94),
    height: widthToDp(50),
    resizeMode: 'cover',
    // aspectRatio: 5 / 3,
  },
  headingContainerStyle: {},
  headingStyle: {
    fontSize: widthToDp(5),
    fontWeight: 'bold',

    marginBottom: widthToDp(2),
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  authContainer: {
    marginVertical: widthToDp(1),
  },
  authContainerText: {
    fontWeight: '500',
    fontSize: widthToDp(4),
  },
  contContainer: {},
  contContainerText: {fontWeight: '500', fontSize: widthToDp(4)},
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default List;
