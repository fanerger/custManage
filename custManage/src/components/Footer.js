import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { rem, app } from '../config/style'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  clickFun (item) {
    Alert.alert(item.name)
  }

  render() {
    const footerInfo = [
      {icon: require('../images/base/i_footer_01.png'), name: '客服热线 '},
      {icon: require('../images/base/i_footer_02.png'), name: '客服微信 '},
      {icon: require('../images/base/i_footer_03.png'), name: '关注小小攒钱 '},
    ]
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footerWrap}>
          {
            footerInfo.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={this.clickFun.bind(this, item)}>
                  <View style={styles.footerItem}>
                    <Text style={styles.footerTxt}>{item.name}</Text>
                    <Image
                      source={item.icon}
                      style={styles.footerImg}
                    />
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <Text style={styles.footerCopy}>Copyright © 2018 xxjr All Rights Reserved</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingVertical: rem(40),
    width: app.width,
  },
  footerWrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  footerItem: {
    flex: 1,
    width: app.width / 3,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerTxt: {
    marginRight: rem(5),
    fontSize: rem(20),
    color: '#999'
  },
  footerImg: {
    width: rem(34),
    height: rem(28)
  },
  footerCopy: {
    marginTop: rem(20),
    textAlign: 'center',
    fontSize: rem(20),
    color: '#b2b2b2'
  }
})