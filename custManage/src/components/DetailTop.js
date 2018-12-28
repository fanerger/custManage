import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { app, rem } from '../config/style'
export default class BillDtl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusObj: {
        0: '待开发',
        1: '未了解',
        2: '未上门待签约',
        3: '已上门待签约'
      },
      userInfo: {orderId: 1, realName: '张三', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '女', status: 0, telephone: '18398101098'},
    }
  }
  render() {
    const { realName, telephone, stars, allotTime, sex, age, status} = this.state.userInfo
    const arr = []
    for(var i = 0; i < stars; i++) {
      arr.push(1)
    }
    let headUrl = require('../images/avatar/default_head.png')
    if (sex === '男') headUrl = require('../images/avatar/default_men.png')
    if (sex === '女') headUrl = require('../images/avatar/default_women.png')
    return (
      <View style={styles.userTop}>
        <Image
          source={require('../images/user/user_bg.png')}
          style={styles.userBg}
        />
        <View style={styles.userWrap}>
          <Image
            source={headUrl}
            style={styles.avatar}
          />
          <View style={styles.billInfo}>
            <View style={styles.nameInfo}>
              <Text style={styles.name}>{realName}</Text>
              <Text style={styles.comTxt}>（{sex} {age}）</Text>
            </View>
            <View style={styles.starWrap}>
              {
                arr.map((item, idx) => {
                return <Image
                        source={require('../images/star.png')}
                        style={styles.star}
                        key={idx}
                      />
                })
              }
            <Text style={styles.comTxt}>{stars}星客户</Text>
          </View>
            <Text style={styles.comTxt}>{telephone}</Text>
            <Text style={styles.allotTime}>分配时间 {allotTime}</Text>
          </View>
        </View>
        <Text style={styles.statusTxt}>{this.state.statusObj[status]}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userTop: {
    position: 'relative'
  },
  userBg: {
    width: app.width,
    height: rem(220),
  },
  userWrap: {
    position: 'absolute',
    top: rem(40),
    left: rem(30),
    width: rem(590),
    flexDirection: 'row',
  },
  avatar: {
    width: rem(100),
    height: rem(100),
    marginRight: rem(10),
  },
  billInfo: {
    flexGrow: 1
  },
  nameInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: rem(30),
    color: '#fff',
  },
  comTxt: {
    fontSize: rem(24),
    color: '#fff'
  },
  starWrap: {
    flexDirection: 'row',
    marginTop: rem(4),
    height: rem(44),
    alignItems: 'center',
  },
  star: {
    width: rem(24),
    height: rem(24)
  },
  allotTime:{
    fontSize: rem(24),
    color: '#a9bdfa'
  },
  statusTxt: {
    color: '#fde284',
    fontSize: rem(28),
    position: 'absolute',
    top: rem(40),
    right: rem(30),
  }
});
