/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import Balance from './App/Screen/Balance'
import Transfer from './App/Screen/Transfer'
import Topup from "./App/Screen/Topup"
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import utf8 from 'utf8';


async function requestPhonePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title: 'BSP SMS App Camera Permission',
        message:
          'BSP SMS App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      let that = utf8.encode('*120#');
      RNImmediatePhoneCall.immediatePhoneCall(that);
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}


const TopNav = createMaterialTopTabNavigator({

  Balance: Balance,
  Topup: Topup,
  Transfer: Transfer,

})


export default createAppContainer(TopNav);
