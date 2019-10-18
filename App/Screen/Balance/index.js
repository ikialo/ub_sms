
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    StatusBar,
    Modal,
  PermissionsAndroid,

} from 'react-native';

import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import utf8 from 'utf8';


let pin;

export default class Balance extends Component {

    constructor(){
        super()
        this.state = {
            modalVisible: false,
            pin: '',
            button: null,
        };


    }

   
   

    setButton(number){
        this.setState({button : number})
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    confirmPin(){

        console.log("confirm Pressed")
        requestCallPermission(this.state.button, this.state.pin);
    }

    render() {
        return (
            <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>

                <Modal
                    animationType= "fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{
                        flex: 1, marginTop: 22, justifyContent: 'center', alignSelf: "center",
                        alignItems: 'center', width: '80%', height: 100,
                        backgroundColor: '#b3ffb3'
                    }}>
                        <View>

                            <View style ={{alignItems:'center', marginBottom:5}}>
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
                </Modal>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                            this.setButton(1);
                            
                        }}
                        style={{
                            backgroundColor: 'green',
                            alignItems: 'center',
                            width: "90%",
                            alignSelf: 'center',
                            borderRadius: 10,

                        }}>

                        <View style={{ height: 40 }}>
                            <Text style={{ fontSize: 25 }}>
                                Balance Enquiry 
                            </Text>
                        </View>



                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 5 }}>
                    <TouchableOpacity
                     onPress={() => {
                        this.setModalVisible(true);
                        this.setButton(2)
                    }}
                    style={{
                        backgroundColor: 'green',
                        alignItems: 'center',
                        width: "90%",
                        alignSelf: 'center',
                        borderRadius: 10
                    }}>

                        <View style={{ height: 40 }}>
                            <Text style={{ fontSize: 25 }}>
                                Mini Statements
                            </Text>
                        </View>

                    </TouchableOpacity>

                </View>


            </View>
        )
    }

}



async function requestCallPermission(button_num, pin) {
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
  
        switch(button_num) {
          case 1:
             that = utf8.encode('*131*'+pin+"*"+pin+"*"+"1*2#");
  
            break;
          
          case 2:
            that = utf8.encode('*131*'+pin+"*"+pin+"*"+"1#");
  
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

