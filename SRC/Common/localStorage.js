import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

const removeKeyData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }

  console.log(key, 'Removed');
};

const removeMultipleKeysDataFromLocalStorage = async (
  ...removeAllKeyDataExceptThisKeys
) => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    keys = keys.filter(e => !removeAllKeyDataExceptThisKeys.includes(e));
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // read key error
    console.log('removeMultipleKeysDataFromLocalStorage=>', e);
  }
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // read key error
  }
};

export {
  storeData,
  getData,
  clearAll,
  removeKeyData,
  removeMultipleKeysDataFromLocalStorage,
  getAllKeys,
};
