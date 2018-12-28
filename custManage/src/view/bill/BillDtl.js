import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { app, rem } from '../../config/style'
import DetailTop from '../../components/DetailTop'
export default class BillDtl extends React.Component {
  static navigationOptions = {
    title: '订单详情',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: rem(32),
      },
  };
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
  componentDidMount(){
    let orderId = this.props.navigation.state.params.orderId;
    console.log('orderId'+orderId)
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <DetailTop/>
          <View style={styles.tabsWrap}>
            <TouchableOpacity>
              <Text style={styles.tabTxt}>客户信息</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.tabTxt}>跟进记录</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.tabTxt}>分配记录</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.footerbtns}>
        <TouchableOpacity>
          <View style={[styles.btnWrap, styles.borderR]}>
            <Image
              source={require('../../images/work/dtl_btn1.png')}
              style={styles.btnImg}
            />
            <Text style={styles.btnTxt}>修改状态</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.btnWrap}>
            <Image
              source={require('../../images/work/dtl_btn2.png')}
              style={styles.btnImg}
            />
            <Text style={styles.btnTxt}>添加跟进</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  scrollView: {
    flexGrow: 1
  },
  tabsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: rem(100),
  },
  tabTxt: {
    fontSize: rem(30),
    fontWeight: 'bold',
    color: '#cccccc'
  },
  footerbtns: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#d3ddfb',
    borderTopWidth: 1
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: rem(100),
    justifyContent: 'center',
    width: rem(320)
  },
  borderR: {
    borderColor: '#d3ddfb',
    borderRightWidth: 1
  },
  btnImg: {
    width: rem(38),
    height: rem(41),
    marginRight: rem(10),
  },
  btnTxt: {
    color: app.color,
    fontSize: rem(30)
  }
});
