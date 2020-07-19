/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class SplashScreens extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 60, height: 60}}
          source={require('../../assets/img/logo.png')}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company Name</Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>
            Join Our Community
          </Text>
        </View>
      </View>
    );
  }
}

export default SplashScreens;
