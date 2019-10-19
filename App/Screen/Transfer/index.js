
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

var radio_props_bank = [
  { label: 'ANZ', value: 1 },
  { label: 'Wespac', value: 2 },
  { label: 'Kina', value: 3 }

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
      meter: null,
      description:null,
      OtherAccount: 2,
      toAccount: null,
      bank: 1,
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
      if(this.state.value == 1){
        this.setState({
          OtherAccount: 2
        })
      }else {
        this.setState({
          OtherAccount: 1
        })
      }
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, this.state.OtherAccount, null,null,null);

    }
     if (this.state.button == 2) {
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, null, this.state.toAccount, this.state.description, null);

    }
    if (this.state.button == 3) {
      requestCallPermission(this.state.button, this.state.pin, this.state.amount, this.state.value, null, this.state.toAccount, this.state.description, this.state.bank );

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


          

            <View style={{
              borderRadius: 7,
              width: 120,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                keyboardType="number-pad"
                onChangeText={(toAccount) => this.setState({ toAccount })}
                Value={this.state.toAccount}
                placeholder="Enter Account Number"
              >



              </TextInput>

            </View>

            
            <View style={{
              borderRadius: 7,
              width: 120,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                onChangeText={(description) => this.setState({ description })}
                Value={this.state.description}
                placeholder="Enter Description"
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

            <Text>
              Choose Bank to send to
          </Text>

            <View>
              <RadioForm
                radio_props={radio_props_bank}
                initial={0}
                onPress={(bank) => { this.setState({ bank: bank }) }}
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
                onChangeText={(toAccount) => this.setState({ toAccount })}
                Value={this.state.toAccount}
                placeholder="Enter Account Number"
              >

              </TextInput>

            </View>

            
            <View style={{
              borderRadius: 7,
              width: 120,
              backgroundColor: 'white',
              alignItems: 'center'
            }}>
              <TextInput style={{ width: "100%", alignSelf: 'center' }}
                onChangeText={(description) => this.setState({ description })}
                Value={this.state.description}
                placeholder="Enter Description"
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
            console.log('Modal has been closed.');
            this.setModalVisible(false);

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
  

  async function requestCallPermission(button_num, pin, amount, account, otherAccount, toAcc, description, bank) {
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
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "2*1*" + account + "*" + otherAccount+ "*" + amount + "*1#");
  
            break;
  
          case 2:
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "2*2*" + account + "*1*" + toAcc + "*" + amount + "*" + description + "*1#");
  
            break;
  
          case 3:
            that = utf8.encode('*131*' + pin + "*" + pin + "*" + "2*3*" + account + "*1*" + bank  +  "*" + toAcc +"*" + amount+"*" + description  + "*1#");
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
  