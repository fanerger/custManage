import { Alert, BackHandler } from 'react-native';

export default function() {
  this.props.navigation.goBack();
  // if (this.props.navigation.getCurrentRoutes().length <= 1) {
  //   Alert.alert(
  //     '退出',
  //     '想好了？',
  //     [
  //       {text: '没', onPress: () => console.log('Cancel Pressed!')},
  //       {text: '恩', onPress: () => BackHandler.exitApp()},
  //     ]
  //   )
  // } else {
  //   this.props.navigation.goBack();
  // }
  // return true;
}
