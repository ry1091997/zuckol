//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as Keys from '../Common/key';
import {getData} from '../Common/localStorage';
import List from '../Components/Item';
import {widthToDp} from '../Common/Responsive';

const ListOfItems = ({data}) => {
  console.log('data value==>', data);

  const renderItem = ({item}) => {
    console.log('dljflkjfkjds==>', item);
    return (
      <View>
        <List item={item} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {data?.length > 0 ? (
        <FlatList data={data} renderItem={renderItem} />
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholder}>
            No Data found Fill the Form To see Data Here
          </Text>
        </View>
      )}
      {/* <Text>ListOfItems</Text> */}
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
  placeholderContainer: {
    width: widthToDp(95),
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: widthToDp(7.5),
    textAlign: 'center',
    fontWeight: '700',
    color: '#0a2f44',
  },
});

//make this component available to the app
export default ListOfItems;
