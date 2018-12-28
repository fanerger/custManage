import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
  View
} from 'react-native';
import { rem, app } from '../config/style'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: []
    }
  }
  static navigationOptions = {
    header: null,
  }
  clickMenu (item) {
    if (item.path) {
      this.props.navigation.navigate(item.path)
    }
  }
  getNotices () {
    request({
      url: '/fx/notice/queryNoticeList',
      success: res => {
        this.setState({notices: res.rows})
      }
    })
  }
  lookMore () {
    this.props.navigation.navigate('CreditHome');
  }
  render() {
    const menus = [
      {icon: require('../images/work/nav1.png'), name: '待处理订单', path: 'PendingBill'},
      {icon: require('../images/work/nav2.png'), name: '订单列表', path: 'AllBill'},
      {icon: require('../images/work/nav3.png'), name: '订单统计', path: 'AllBill'}
    ]
    const listItems = menus.map((item,index) => {
      return <TouchableOpacity key={index} onPress={this.clickMenu.bind(this, item)}>
                <View style={styles.menuItem}>
                  <View style={styles.menuImgW}>
                    <Image
                        source={item.icon}
                        style={styles.menuImg}
                      />
                  </View>
                  <Text style={styles.menuTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
    });
    return (
      <View style={styles.container}>
        <View>
          <Image
                source={require('../images/work/work_banner.png')}
                style={styles.banner}
              />
        </View>
        <View style={styles.menus}>
          {listItems} 
        </View>
        <Text>{global.signId}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menus: {
    flexWrap: 'wrap',
    width: app.width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: rem(70)
  },
  menuItem: {
    width: app.width/3,
    marginBottom: app.padding
  },
  menuImgW: {
    flexDirection: 'row',
    height: rem(100),
    justifyContent: 'center',
  },
  menuImg: {
    width: rem(84),
    height: rem(84)
  },
  menuTxt: {
    textAlign: 'center',
    fontSize: rem(26),
    color: '#333'
  },
  banner: {
    width: app.width,
    height: rem(430),
    resizeMode: 'contain',
  },
});
