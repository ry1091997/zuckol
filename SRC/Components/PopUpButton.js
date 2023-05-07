//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const PopUpButton = ({galleryPhotoUpload, cameraOpen}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity
            style={styles.upload}
            onPress={() => galleryPhotoUpload()}>
            {/* <Text style={{fontSize: widthToDp(8)}}>.</Text> */}
            <Text>Upload Photo From Gallery</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.upload} onPress={() => cameraOpen()}>
            {/* <Text style={{fontSize: widthToDp(8)}}>.</Text> */}
            <Text>Upload Photo From Camera</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default PopUpButton;
