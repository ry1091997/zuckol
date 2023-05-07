import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
// import DeviceInfo from 'react-native-device-info';
// const isTablet = DeviceInfo.isTablet();

let currentWidth = width;
let currentHeight = height;
// if (isTablet && width > height) {
//   [currentWidth, currentHeight] = [height, width];
// }

const widthToDp = number => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((currentWidth * givenWidth) / 100);
};

const heightToDp = number => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((currentHeight * givenHeight) / 100);
};

export {widthToDp, heightToDp};
