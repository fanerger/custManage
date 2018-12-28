import React from 'react';
import {  StyleSheet, View, Button, TextInput, TouchableOpacity ,Text  } from 'react-native';
import { app, rem } from '../config/style'
import Loading from '../components/Loading'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telephone: '15000000000',
      password: '123456'
    };
  }
  static navigationOptions = {
    header: null
  };
  // 登录请求
  login () {
    storage.setItem('signId', 'fanwen').then(() =>{
      this.props.navigation.navigate('MainTabNavigator')
    })
    // this.Loading.show()
    // request({
    //   url: '/applogin',
    //   data: this.state,
    //   success: res => {
    //     console.log(res)
    //     this.Loading.close()
    //     storage.setItem('userInfo', JSON.stringify(res.attr)).then(() =>{
    //       this.props.navigation.navigate('MainTabNavigator')
    //     })
    //   },
    //   fail: err => {
    //     this.Loading.close()
    //     toast(err.message)
    //   }
    // })
  }
  componentWillUnmount() {
    this.setState = (state,callback) => { return };
  }
  render() {
    return (
        <View style={styles.loginW}>
            <Text style={styles.title}>欢迎登录客户管理</Text>
            <View style={styles.inputW}>
              <Text style={styles.label}>手机号</Text>
              <TextInput
                style={styles.input}
                onChangeText={(telephone) => this.setState({telephone})}
                value={this.state.telephone}
                placeholder='请输入手机号'
                keyboardType='phone-pad'
                maxLength={11}
              />
            </View>
            <View style={styles.inputW}>
              <Text style={styles.label}>密 码</Text>
              <TextInput
                style={styles.input}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder='请输入密码'
                keyboardType='phone-pad'
                maxLength={6}
              />
            </View>
            <TouchableOpacity onPress={this.login.bind(this)}>
              <Text style={styles.loginBtn}>登录</Text>
            </TouchableOpacity>

            <Loading ref={r=>{this.Loading = r}} hide = {true} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  loginW: {
    flex: 1,
    paddingTop: rem(200)
  },
  loginBtn: {
    backgroundColor: app.color,
    borderWidth: 1,
    height: rem(90),
    fontSize: rem(28),
    marginHorizontal: rem(30),
    borderColor: app.color,
    color: '#fff',
    lineHeight: rem(90),
    textAlign: 'center',
    borderTopLeftRadius: rem(10),
    borderBottomRightRadius: rem(10),
    borderTopRightRadius: rem(10),
    borderBottomLeftRadius: rem(10),
  },
  title: {
    fontSize: rem(40),
    paddingLeft: rem(40),
    marginBottom: rem(100),
  },
  inputW: {
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    marginBottom: rem(50),
    paddingLeft: rem(30),
    marginHorizontal: rem(30),
    flexDirection: 'row',
  },
  label: {
    lineHeight: rem(80),
    width: rem(114),
  },
  input: {
    height: rem(80),
    fontSize: rem(30),
  },
  txt: {
    fontSize: rem(30),
    color: '#333',
    paddingLeft: rem(30),
    marginBottom: rem(20)
  }
})
