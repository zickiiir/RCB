/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, 
  Image,
  ImageBackground
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#4897D8" barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.navigation}>
            <Text 
              style={styles.navigation_text}>
              <Image 
                style={{width: 50, height: 50 }}
                source={require('./assets/img/rc.png')}
              />
              Hlášení - RC Běchovice
            </Text>
          </View>
          <View style={styles.login}>
            <TextInput
              style={{height: 40, borderColor: '#000'}}
              placeholder="Do tohoto pole zadejte Váš kód"
              value=""
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.footer_text}>RC letiště Běchovice z.s. | HVtronix</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flex: 1
  },
  navigation: {
    backgroundColor: '#4897D8',
    height: 80,
    alignItems: 'center'
  },
  navigation_text: {
    color: '#fff',
    fontSize: 25,
    height: 80
  },
  login: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    backgroundColor: '#4897D8',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer_text: {
    color: '#fff',
    fontSize: 14
  }
});

export default App;
