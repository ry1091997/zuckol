//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthToDp} from '../Common/Responsive';
import PopUpButton from './PopUpButton';

// create a component
const ImageUpload = ({onPress, cameraOpen, galleryPhotoUpload}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.upload}
            onPress={() => galleryPhotoUpload()}>
            {/* <Text style={{fontSize: widthToDp(8)}}>.</Text> */}
            <Text>Upload From Gallery</Text>
          </TouchableOpacity>
          {/* <PopUpButton
          cameraOpen={() => cameraOpen()}
          galleryPhotoUpload={() => galleryPhotoUpload()}
        /> */}
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.upload} onPress={() => cameraOpen()}>
            {/* <Text style={{fontSize: widthToDp(8)}}>.</Text> */}
            <Text>Upload From Camera</Text>
          </TouchableOpacity>
          {/* <PopUpButton
          cameraOpen={() => cameraOpen()}
          galleryPhotoUpload={() => galleryPhotoUpload()}
        /> */}
        </View>
      </View>
      {/* <Text>ImageUpload</Text> */}
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
    width: widthToDp(90),
    borderWidth: widthToDp(0.3),
    borderRadius: widthToDp(2),
  },
  subContainer: {
    // borderWidth: widthToDp(0.3),
    // width: widthToDp(90),
    padding: widthToDp(1),

    // borderRadius: widthToDp(2),
  },
  upload: {
    backgroundColor: '#e1eff0',
    width: widthToDp(40),
    alignItems: 'center',
    borderRadius: widthToDp(2),
  },
});

//make this component available to the app
export default ImageUpload;
