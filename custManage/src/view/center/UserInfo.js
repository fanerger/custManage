import React from 'react';
import {  StyleSheet, View, TextInput, ScrollView, Image, TouchableOpacity ,Text  } from 'react-native';
import { app, rem } from '../../config/style'
import Loading from '../../components/Loading'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        headUrl: require('../../images/avatar/default_head.png'),
        realName: '范文',
        nickName: 'oliver',
        no: '',
        telePhone: '18566455854',
        custDesc: '发生的发生分撒的发生'
      }
    };
  }
  static navigationOptions = {
    title: '修改个人资料',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: rem(32),
    },
  };
  // 登录请求
  login () {
    console.log(this.state.userInfo)
  }
  // input 值
  setInput (name, val) {
    let userInfo = this.state.userInfo
    userInfo[name] =val
    this.setState({userInfo})
  }
  componentWillUnmount() {
    this.setState = (state,callback) => { return };
  }
  render() {
    const { userInfo } = this.state
    return (
        <ScrollView style={styles.loginW}>
            <View style={styles.headWrap}>
              <Text style={styles.label}>头像</Text>
              <Image
                source={userInfo.headUrl}
                style={styles.headImg}
              />
            </View>
            <View style={styles.inputW}>
              <Text style={styles.label}>姓名</Text>
              <TextInput
                style={styles.input}
                onChangeText={this.setInput.bind(this, 'realName')}
                value={userInfo.realName}
                placeholder='请输入姓名'
                maxLength={10}
              />
            </View>
            <View style={styles.inputW}>
              <Text style={styles.label}>昵称</Text>
              <TextInput
                style={styles.input}
                onChangeText={this.setInput.bind(this, 'nickName')}
                value={userInfo.nickName}
                placeholder='请输入昵称'
                maxLength={10}
              />
            </View>
            <View style={[styles.inputW, styles.firstInput]}>
              <Text style={styles.label}>员工编号</Text>
              <TextInput
                style={styles.input}
                onChangeText={this.setInput.bind(this, 'no')}
                value={userInfo.no}
                placeholder='请输入员工编号'
                maxLength={10}
              />
            </View>
            <View style={[styles.inputW, styles.firstInput]}>
              <Text style={styles.label}>手机号</Text>
              <TextInput
                style={styles.input}
                onChangeText={this.setInput.bind(this, 'telePhone')}
                value={userInfo.telePhone}
                placeholder='请输入手机号'
                keyboardType='phone-pad'
                maxLength={11}
              />
            </View>
            <View style={styles.descWrap}>
              <Text style={styles.descTxt}>个人介绍</Text>
              <TextInput
                style={styles.inputArea}
                onChangeText={this.setInput.bind(this, 'custDesc')}
                value={userInfo.custDesc}
                placeholder='介绍下自己吧'
                maxLength={40}
              />
            </View>
            <TouchableOpacity onPress={this.login.bind(this)}>
              <Text style={styles.loginBtn}>保存</Text>
            </TouchableOpacity>

            <Loading ref={r=>{this.Loading = r}} hide = {true} />
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  loginW: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  headWrap: {
    height: rem(120),
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: rem(30),
    justifyContent: 'space-between',
    marginBottom: rem(30),
    alignItems: 'center',
  },
  headImg: {
   width: rem(90),
   height: rem(90) 
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
    marginTop: rem(30),
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
    borderColor: '#f2f2f2',
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
    textAlign: 'right',
    flexGrow: 1,
    paddingRight: rem(40),
  },
  txt: {
    fontSize: rem(30),
    color: '#333',
    paddingLeft: rem(30),
    marginBottom: rem(20)
  },
  descWrap: {
    backgroundColor: '#fff',
    paddingHorizontal: rem(30),
    paddingBottom: rem(30),
  },
  descTxt: {
    lineHeight: rem(90),
    fontSize: rem(30)
  },
  inputArea: {
    height: rem(120),
    backgroundColor: '#f7f7f7',
    padding: rem(10),
    fontSize: rem(30),
    borderRadius: rem(10),
    textAlignVertical: 'top'
  }
})
