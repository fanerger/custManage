import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { rem } from '../config/style'

import HomeScreen from '../view/Home';
import LinksScreen from '../view/Contacts';
import SettingsScreen from '../view/Center';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  tabBarIcon1: {
    width: rem(46),
    height: rem(39),
  },
  tabBarIcon2: {
    width: rem(43),
    height: rem(42),
  },
  tabBarIcon3: {
      width: rem(41),
      height: rem(41),
  }
});
const tabBarOptions = {
  activeTintColor: '#3a87f6',
  inactiveTintColor: '#607587',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '#fff',
  },
}
HomeStack.navigationOptions = {
  tabBarLabel: '工作台',
  tabBarOptions,
  tabBarIcon: ({focused}) => {
    if (focused) {
        return (
            <Image style={styles.tabBarIcon1} source={require('../images/tab_work_active.png')}/>
        );
    }
    return (
        <Image style={styles.tabBarIcon1} source={require('../images/tab_work.png')}/>
    );
  },
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: '通讯录',
  tabBarOptions,
  tabBarIcon: ({focused}) => {
    if (focused) {
        return (
            <Image style={styles.tabBarIcon2} source={require('../images/tab_contacts_active.png')}/>
        );
    }
    return (
        <Image style={styles.tabBarIcon2} source={require('../images/tab_contacts.png')}/>
    );
  },
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '我的',
  tabBarOptions,
  tabBarIcon: ({focused}) => {
    if (focused) {
        return (
            <Image style={styles.tabBarIcon3} source={require('../images/tab_user_active.png')}/>
        );
    }
    return (
        <Image style={styles.tabBarIcon3} source={require('../images/tab_user.png')}/>
    );
  },
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
