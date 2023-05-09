/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Form from './SRC/SCREEN/form';
import CommonHeader from './SRC/Components/Header';
import SplashScreen from 'react-native-splash-screen';
import * as Config from './SRC/Common/config';

function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // our api calls will be here.
        new Promise(resolve => setTimeout(resolve, 500)); // wait for 5 secs
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hide();
      }
    }
    prepare();
  });

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Config?.status_bar_background_color}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <View>
              <CommonHeader />
              <Form />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  container: {
    // backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  safeAreaStyle: {flex: 1, justifyContent: 'center', backgroundColor: '#fff'},
});

export default App;
