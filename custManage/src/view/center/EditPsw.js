import React from 'react';
import {  StyleSheet, View, TextInput, TouchableOpacity ,Text  } from 'react-native';
import { app, rem } from '../../config/style'
import Loading from '../../components/Loading'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPwd: '',
      newPwd: '',
      checkPwd: ''
    };
  }
  static navigationOptions = {
    title: '修改密码',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: rem(32),
    },
  };
  // 登录请求
  login () {
    console.log(this.state)
  }
  componentWillUnmount() {
    this.setState = (state,callback) => { return };
  }
  render() {
    return (
        <View style={styles.loginW}>
            <View style={[styles.inputW, styles.firstInput]}>
              <Text style={styles.label}>原密码</Text>
              <TextInput
                style={styles.input}
                onChangeText={(oldPwd) => this.setState({oldPwd})}
                value={this.state.oldPwd}
                placeholder='请输入原密码'
                keyboardType='phone-pad'
                maxLength={11}
              />
            </View>
            <View style={styles.inputW}>
              <Text style={styles.label}>新密码</Text>
              <TextInput
                style={styles.input}
                onChangeText={(newPwd) => this.setState({newPwd})}
                value={this.state.newPwd}
                placeholder='输入新密码'
                keyboardType='phone-pad'
                maxLength={16}
              />
            </View>
            <View style={styles.inputW}>
              <Text style={styles.label}>重复密码</Text>
              <TextInput
                style={styles.input}
                onChangeText={(checkPwd) => this.setState({checkPwd})}
                value={this.state.checkPwd}
                placeholder='重复输入新密码'
                keyboardType='phone-pad'
                maxLength={16}
              />
            </View>
            <TouchableOpacity onPress={this.login.bind(this)}>
              <Text style={styles.loginBtn}>保存</Text>
            </TouchableOpacity>

            <Loading ref={r=>{this.Loading = r}} hide = {true} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  loginW: {
    flex: 1,
    backgroundColor: '#f7f7f7',
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
    marginTop: rem(100),
    borderTopLeftRadius: rem(10),
    borderBottomRightRadius: rem(10),
    borderTopRightRadius: rem(10),
    borderBottomLeftRadius: rem(10),
  },
  firstInput: {
    marginBottom: rem(40)
  },
  inputW: {
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    backgroundColor: '#fff',
    paddingLeft: rem(30),
    flexDirection: 'row',
  },
  label: {
    lineHeight: rem(110),
    width: rem(140),
    fontSize: rem(30)
  },
  input: {
    height: rem(110),
    fontSize: rem(30),
  },
  txt: {
    fontSize: rem(30),
    color: '#333',
    paddingLeft: rem(30),
    marginBottom: rem(20)
  }
})
