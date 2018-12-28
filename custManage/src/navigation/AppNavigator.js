import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../view/AuthLoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import Login from '../view/Login';
import AllBill from '../view/bill/AllBill';
import PendingBill from '../view/bill/PendingBill';
import BillDtl from '../view/bill/BillDtl';
import UserInfo from '../view/center/UserInfo';
import EditPsw from '../view/center/EditPsw';

// 它把那3个tab页汇成了一个母页面，设置下这个去掉顶部标题栏
MainTabNavigator.navigationOptions = {header: null}
// 用createStackNavigator创建的页面会加入路由堆栈，
// AuthLoadingScreen，Login这2个页面是直接用的组件，没有路由痕迹相当于vue的 router.replace()
const RootStack = createStackNavigator({
  MainTabNavigator,
  AllBill,
  PendingBill,
  BillDtl,
  UserInfo,
  EditPsw
});

// createSwitchNavigator 来做登录页的，防止返回到登录页
export default createSwitchNavigator({
  AuthLoadingScreen,
  Login,
  RootStack,
}, {
  initialRouteName: 'AuthLoadingScreen'
});