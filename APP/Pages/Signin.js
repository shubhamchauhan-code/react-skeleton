/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Style from '../../assets/css/Style';
//*******************************************************************************/
/*******************************************************************************/
/*********************  FOR LOGIN **********************************************/
/*******************************************************************************/
/****************** Use -> this.props.onSignin('token')  **********************/
/*******************************************************************************/
/*******************************************************************************/

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View
            style={{paddingTop: 100, paddingBottom: 60, alignItems: 'center'}}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/img/logo.png')}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Company Name</Text>
            <Text style={{color: 'grey', textAlign: 'center'}}>
              welcome back!
            </Text>
          </View>

          <View style={{padding: 20}}>
            <TextInput style={[Style.inputStyle]} placeholder="Your Name" />
            <TextInput style={[Style.inputStyle]} placeholder="Password" />
          </View>

          <View>
            <TouchableOpacity
              style={{alignItems: 'center', paddingVertical: 20}}>
              <Text style={{color: '#999999', fontWeight: 'bold'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.onSignin('token')}
              style={[Style.btnStyle]}>
              <Text
                style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={[Style.btnTextStyle]}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Signin;
