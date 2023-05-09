//import liraries
import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import TextInputForm from '../Components/TextInput';
import {widthToDp} from '../Common/Responsive';
import ImageUpload from '../Components/ImageUpload';
import Button from '../Components/Button';
import {AuthError} from '../Components/AuthComponents';
import CustomModal from '../Components/modal';
import PopUpButton from '../Components/PopUpButton';
import {getData, storeData} from '../Common/localStorage';
import * as Keys from '../Common/key';
import Header from '../Components/Header';
import ListOfItems from './ListOfBlog';
import RNRestart from 'react-native-restart';

// create a component
const Form = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [seoDescription, setSeoDescription] = useState();
  const [authErrorMessage, setAuthErrorMessage] = useState();
  const [imageItem, setImageItem] = useState();
  const [showImage, setShowImage] = useState();
  //   const [showData, setShowData] = useState();
  //   const [itemData, setItemData] = useState();
  //   const myTextInput = useRef();
  //   const [tile]

  const handleOnPress = () => {
    console.log(
      'SUBMIT===>',
      imageItem?.path.includes('.png') || imageItem?.path.includes('.jpeg'),
    );
    if (!title?.length || title?.length > 50) {
      console.log('lsdfitem');
      setAuthErrorMessage('Title character length must be in between 0 to 50');
      return;
    } else if (!content?.length) {
      setAuthErrorMessage('Content character length must be greater than 0');
      return;
    } else if (!author?.length || author?.length > 20) {
      setAuthErrorMessage('Author character length must be in between 0 to 20');
      return;
    } else if (!seoDescription?.length || seoDescription?.length > 200) {
      setAuthErrorMessage(
        'Seo Description character length must be in between 0 to 200',
      );
      return;
    } else if (!imageItem?.path) {
      setAuthErrorMessage('please Select an image');
      return;
    } else if (imageItem?.path.includes('.png')) {
    } else if (imageItem?.path.includes('.jpeg')) {
    } else if (imageItem?.path.includes('.jpg')) {
    } else if (
      !imageItem?.path.includes('.png') ||
      !imageItem?.path.includes('.jpeg') ||
      !imageItem?.path.includes('.jpg')
    ) {
      setAuthErrorMessage('only png, jpg and jpeg image allowed allowed');
      return;
    }
    let itemOfBlog;
    async function StoreValue() {
      let jsonValue = await getData(Keys.item_key);

      console.log('GetData==>', jsonValue);
      if (jsonValue) {
        jsonValue = JSON.parse(jsonValue);
        itemOfBlog = {
          heading: title,
          auth: author,
          cont: content,
          mediaId: imageItem,
          seo: seoDescription,
        };
        jsonValue.push(itemOfBlog);
        console.log('GetData==>', jsonValue);
        // setItemData(jsonValue);
        await storeData(Keys.item_key, jsonValue);
      } else {
        itemOfBlog = [
          {
            heading: title,
            auth: author,
            cont: content,
            mediaId: imageItem,
            seo: seoDescription,
          },
        ];
        // setItemData(itemOfBlog);
        await storeData(Keys.item_key, itemOfBlog);
      }

      //   let jsonValue = await getData(Keys.item_key);
      console.log('dljldsjf', JSON.parse(await getData(Keys.item_key)));
    }
    StoreValue();

    RNRestart.restart();
  };

  const ImageUploadHandler = async gallery => {
    let image;
    if (gallery) {
      image = await ImagePicker?.openPicker({
        //   width: widthToDp(90),
        //   height: widthToDp(40),
        cropping: true,
        mediaType: 'photo',
        //   maxWidth: widthToDp(70),
        //   maxHeight: widthToDp(30),
        // saveToPhotos: true,
        // compressImageQuality: 1,
      });
    } else {
      image = await ImagePicker?.openCamera({
        //   width: widthToDp(90),
        //   height: widthToDp(40),
        cropping: true,
        //   mediaType: 'photo',
        //   maxWidth: widthToDp(70),
        //   maxHeight: widthToDp(30),
        saveToPhotos: true,
        compressImageQuality: 1,
      });
    }
    console.log('Hello world===>', image);
    setImageItem(image);
    // console.log('Hello world===>', result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: widthToDp(10)}}>
        <View
          style={[
            styles.avatar,
            styles.avatarContainer,
            {padding: widthToDp(2)},
          ]}>
          <Image
            style={styles.avatar}
            source={require('../ASSETS/Images/Logo.png')}
          />
        </View>
      </View>
      <View style={styles.commonStyle}>
        <View style={{width: widthToDp(90)}}>
          <AuthError errorMessage={authErrorMessage} />
        </View>

        <View style={styles.commonStyle}>
          <TextInputForm
            text="Title"
            maximuCharacter={50}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.commonStyle}>
          <TextInputForm text="Cover Image" showHeadingOnly={true} />
          {!imageItem?.path ? (
            <ImageUpload
              cameraOpen={() => ImageUploadHandler()}
              galleryPhotoUpload={() => ImageUploadHandler(true)}
            />
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setShowImage(true)}>
              <Image
                style={styles.uploadImage}
                source={{uri: imageItem.path}}
              />
              <Text>Click On Photo</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.divider} />

        <View style={styles.commonStyle}>
          <TextInputForm
            text="Content"
            onChangeText={text => setContent(text)}
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.commonStyle}>
          <TextInputForm
            text="Author Name"
            maximuCharacter={50}
            onChangeText={text => setAuthor(text)}
          />
        </View>
        <View style={styles.divider} />

        <View style={styles.commonStyle}>
          <TextInputForm
            onChangeText={text => setSeoDescription(text)}
            maximuCharacter={50}
            text="Seo Description"
          />
        </View>
        <View style={styles.divider} />
      </View>
      <Button buttonText={'Submit'} onPress={() => handleOnPress()} />
      {showImage ? (
        <CustomModal
          modalVisible={showImage}
          onRequestClose={() => setShowImage(!showImage)}>
          <Image style={styles.fullImage} source={{uri: imageItem?.path}} />
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
    // backgroundColor: 'red',
  },

  divider: {
    marginVertical: widthToDp(1),
    backgroundColor: 'green',
  },
  avatarContainer: {
    padding: widthToDp(5),
  },
  avatar: {
    backgroundColor: '#0a2f44',
    borderRadius: widthToDp(1.5),
  },
  uploadImage: {
    width: widthToDp(90),
    height: widthToDp(40),

    borderRadius: widthToDp(1.5),
  },
  commonStyle: {flex: 1},
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default Form;
