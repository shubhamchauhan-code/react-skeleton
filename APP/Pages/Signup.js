import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
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

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{alignItems: 'center', paddingTop: 70}}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/img/logo.png')}
            />

            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Company Name
              </Text>
              <Text style={{color: 'grey', textAlign: 'center'}}>
                Join Our Community
              </Text>
            </View>
          </View>

          <View style={{padding: 20}}>
            <TextInput style={[Style.inputStyle]} placeholder="Your Name" />

            <TextInput
              style={[Style.inputStyle]}
              placeholder="Your Mobile No"
            />

            <TextInput style={[Style.inputStyle]} placeholder="Password" />

            <TextInput
              style={[Style.inputStyle]}
              placeholder="Confirm Password"
            />
          </View>

          <View>
            <TouchableOpacity
              style={{marginBottom: 30}}
              onPress={() => this.props.navigation.navigate('Signin')}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  paddingRight: 20,
                }}>
                Already have an account?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.onSignin('token')}
              style={[Style.btnStyle]}>
              <Text style={[Style.btnTextStyle]}>create an account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
