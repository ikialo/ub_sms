
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Modal, 
  TextInput, 
  PermissionsAndroid
} from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import utf8 from 'utf8';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: 'Current', value: 1 },
  { label: 'Savings', value: 2 }
];

var radio_props_network = [
  { label: 'Digicel', value: 1 },
  { label: 'Bemobile', value: 2 }
];

export default class Transfer extends Component {


  constructor() {
    super()
    this.state = {
      modalVisible: false,
      pin: '',
      button: null,
      value: 1,
      amount: null,
      carrier: 1,
      phone: null,
      meter: null
    };


  }




  setButton(number) {
    this.setState({ button: number })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  confirmPin() {

    console.log("confirm Pressed")
    console.log(this.state.value)
    console.log(this.state.amount)

    if (this.state.button == 1) {
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, null, null);

    }
     if (this.state.button == 2) {
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, this.state.phone, this.state.carrier);

    }
    if (this.state.button == 3) {
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, this.state.phone, null);

    }
  }


  modalToUse() {

    if (this.state.button == 1) {

      return (
        <View style={{
          flex: 1, marginTop: 22, justifyContent: 'center', alignSelf: "center",
          alignItems: 'center', width: '80%', height: 100,
          backgroundColor: '#b3ffb3'
        }}>

          <View>
            <Text>
              Choose Account to send From
          </Text>

            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value: value }) }}
              />
            </View>


            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(amount) => this.setState({ amount })}
                Value={this.state.amount}
                placeholder="Enter Amount"
              >

              </TextInput>

            </View>

          </View>
          <View>



            <View style={{ alignItems: 'center', marginBottom: 5 }}>
              <Text >Input Pin!</Text>

            </View>

            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(pin) => this.setState({ pin })}
                Value={this.state.pin}
                placeholder="Enter PIN"
              >

              </TextInput>

            </View>


            <TouchableOpacity
              style={{ marginTop: 10, backgroundColor: 'blue', height: 35, borderRadius: 5, justifyContent: "center", alignItems: 'center' }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.confirmPin();

              }}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.button == 2) {

      return (
        <View style={{
          flex: 1, marginTop: 22, justifyContent: 'center', alignSelf: "center",
          alignItems: 'center', width: '80%', height: 100,
          backgroundColor: '#b3ffb3'
        }}>

          <View>
            <Text>
              Choose Account
          </Text>

            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value: value }) }}
              />
            </View>


            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(amount) => this.setState({ amount })}
                Value={this.state.amount}
                placeholder="Enter Amount"
              >



              </TextInput>

            </View>

          </View>

          <View>


            <View>
              <Text>
                Choose Network
          </Text>
              <RadioForm
                radio_props={radio_props_network}
                initial={0}
                onPress={(carrier) => { this.setState({ carrier: carrier }) }}
              />
            </View>

            <View style={{
              borderRadius: 7,
              width: 120,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(phone) => this.setState({ phone })}
                Value={this.state.phone}
                placeholder="Enter Phone Number"
              >



              </TextInput>

            </View>

          </View>
          <View>



            <View style={{ alignItems: 'center', marginBottom: 5 }}>
              <Text >Input Pin!</Text>

            </View>

            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(pin) => this.setState({ pin })}
                Value={this.state.pin}
                placeholder="Enter PIN"
              >

              </TextInput>

            </View>


            <TouchableOpacity
              style={{ marginTop: 10, backgroundColor: 'blue', height: 35, borderRadius: 5, justifyContent: "center", alignItems: 'center' }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.confirmPin();

              }}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (this.state.button == 3) {

      return (
        <View style={{
          flex: 1, marginTop: 22, justifyContent: 'center', alignSelf: "center",
          alignItems: 'center', width: '80%', height: 100,
          backgroundColor: '#b3ffb3'
        }}>

          <View>
            <Text>
              Choose Account
          </Text>

            <View>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value: value }) }}
              />
            </View>


            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(amount) => this.setState({ amount })}
                Value={this.state.amount}
                placeholder="Enter Amount"
              >



              </TextInput>

            </View>

          </View>

          <View>


          
            <View style={{
              borderRadius: 7,
              width: 120,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(meter) => this.setState({ meter })}
                Value={this.state.meter}
                placeholder="Enter Meter Number"
              >



              </TextInput>

            </View>

          </View>
          <View>



            <View style={{ alignItems: 'center', marginBottom: 5 }}>
              <Text >Input Pin!</Text>

            </View>

            <View style={{
              borderRadius: 7,
              width: 90,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(pin) => this.setState({ pin })}
                Value={this.state.pin}
                placeholder="Enter PIN"
              >

              </TextInput>

            </View>


            <TouchableOpacity
              style={{ marginTop: 10, backgroundColor: 'blue', height: 35, borderRadius: 5, justifyContent: "center", alignItems: 'center' }}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.confirmPin();

              }}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

  }

  render() {
    return (
      <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          {true && this.modalToUse()}
        </Modal>


        <View>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setButton(1);

            }}
            style={{ backgroundColor: 'green', alignItems: 'center', width: "90%", alignSelf: 'center', borderRadius: 10 }}>

            <View style={{ height: 40 }}>
              <Text style={{ fontSize: 25 }}>
                Own Account
            </Text>
            </View>



          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setButton(2);

            }}
            style={{ backgroundColor: 'green', alignItems: 'center', width: "90%", alignSelf: 'center', borderRadius: 10 }}>

            <View style={{ height: 40 }}>
              <Text style={{ fontSize: 25 }}>
                Other BSP Accounts
          </Text>
            </View>

          </TouchableOpacity>

        </View>

        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
             onPress={() => {
              this.setModalVisible(true);
              this.setButton(3);

            }}
          style={{ backgroundColor: 'green', alignItems: 'center', width: "90%", alignSelf: 'center', borderRadius: 10 }}>

            <View style={{ height: 40 }}>
              <Text style={{ fontSize: 25 }}>
                Other Banks
          </Text>
            </View>

          </TouchableOpacity>

        </View>



      </View>
    )
  }

  
  }
  

  async function requestCallPermission(button_num, pin, amount, account, phone, Network) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'BSP SMS App Camera Permission',
          message:
            'BSP SMS App needs access to your Phone Dial '
          ,
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        let that;
  
        switch (button_num) {
          case 1:
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "3*1*" + account + "*2*" + amount + "*1#");
  
            break;
  
          case 2:
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "3*1*" + account + "*1*" + phone + "*" + Network + "*" + amount + "*1#");
  
            break;
  
          case 3:
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "3*2*" + account + "*1*" + phone  + "*" + amount + "*1#");
            break;
  
  
  
          default:
            Alert.alert("NUMBER NOT FOUND");
  
        }
        console.log('You can use the camera');
        console.log(that);
  
        RNImmediatePhoneCall.immediatePhoneCall(that);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  