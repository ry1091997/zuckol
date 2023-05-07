//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthToDp} from '../Common/Responsive';
import CustomModal from './modal';
import ListOfItems from '../SCREEN/ListOfBlog';
import {getData} from '../Common/localStorage';
import * as Keys from '../Common/key';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Config from '../Common/config';

// create a component
const CommonHeader = () => {
  const [showImage, setShowImage] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    async function StoreValue() {
      let jsonValue = await getData(Keys.item_key);
      console.log('dljldsjf', JSON.parse(jsonValue));
      setData(JSON.parse(jsonValue));
    }
    StoreValue();
    console.log('dljldsjf');
  }, [showImage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setShowImage(true)}
        style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.textStyle}>{Config?.header_text}</Text>
      </TouchableOpacity>
      {showImage ? (
        <CustomModal
          modalVisible={showImage}
          onRequestClose={() => setShowImage(!showImage)}>
          <View style={{backgroundColor: '#fff', flex: 1}}>
            <ListOfItems data={data} />
          </View>
        </CustomModal>
      ) : null}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    width: widthToDp(100),
    padding: widthToDp(1),
  },
  textStyle: {
    color: '#fff',
    fontSize: widthToDp(5.5),
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default CommonHeader;
