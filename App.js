/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StatusBar, Dimensions, StyleSheet} from 'react-native';
import UnityView, {UnityModule} from '@asmadsen/react-native-unity-view';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>RN App</Text>
      <View style={styles.mainContainerStyle}>
        <UnityView
          ref={(ref) => (this.unity = ref)}
          style={styles.unityViewStyle}
          onMessage={(event) => console.log('onMessage: ', event)}
          // unloadOnUnmount
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  unityViewStyle: {
    width: Dimensions.get('window').width,
    // height: 240,
    height: Dimensions.get('window').height,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonStyle: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 20,
  },
});

export default App;
