import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { app, rem } from '../config/style'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      statusObj: {
        0: '待开发',
        1: '未了解',
        2: '未上门待签约',
        3: '已上门待签约'
      }
    }
  }
  clickTel (telephone) {
    Linking.openURL(`tel:${telephone}`)
  }
  render() {
    const { realName, telephone, stars, allotTime, sex, age, status} = this.props.item
    const arr = []
    for(var i = 0; i < stars; i++) {
      arr.push(1)
    }
    let headUrl = require('../images/avatar/default_head.png')
    if (sex === '男') headUrl = require('../images/avatar/default_men.png')
    if (sex === '女') headUrl = require('../images/avatar/default_women.png')
    return (
      <TouchableOpacity onPress={this.props.clickDtl}>
        <View style={styles.billItem}>
          <View style={styles.headWrap}>
            <Image
                source={headUrl}
                style={styles.headImg}
              />
            <Text style={styles.statusTxt}>{this.state.statusObj[status]}</Text>
          </View>
          <View style={styles.billInfo}>
            <View style={styles.nameInfo}>
              <Text style={styles.name}>{realName}</Text>
              <Text style={styles.sex}>（{sex} {age}）</Text>
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
              <Text style={styles.starTxt}>{stars}星客户</Text>
            </View>
            <View><Text style={styles.timeInfo}>分配时间 {allotTime}</Text></View>
          </View>
          <View style={styles.operationBtns}>
            <TouchableOpacity onPress={this.props.starHandle.bind(this)}>
              <Image
                  source={require('../images/bill_star.png')}
                  style={styles.opBtn}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.editHandle.bind(this)}>
              <Image
                source={require('../images/bill_edit.png')}
                style={styles.opBtn}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickTel.bind(this, telephone)}>
              <Image
                source={require('../images/bill_tel.png')}
                style={styles.opBtn}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  billItem: {
    paddingHorizontal: rem(20),
    paddingVertical: rem(30),
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#f7f7f7',
    position: 'relative'
  },
  operationBtns: {
    position: 'absolute',
    width: rem(230),
    height: rem(60),
    top: rem(20),
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  opBtn: {
    width: rem(55),
    height: rem(55)
  },
  headWrap: {
    width: rem(140),
  },
  billInfo: {
    flexGrow: 1
  },
  headImg: {
    width: rem(84),
    height: rem(84),
    marginBottom:rem(6)
  },
  nameInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: rem(30)
  },
  sex: {
    fontSize: rem(26)
  },
  starTxt: {
    fontSize: rem(24),
    color: '#333',
    marginLeft: rem(20),
  },
  timeInfo: {
    fontSize: rem(24),
    color: '#c8c8c8'
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
  statusTxt: {
    color: app.color,
    width: rem(90),
    fontSize: rem(24),
    textAlign: 'center'
  }
});
