import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
  View,
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
    } else if (item.fn) {
      Alert.alert(
        '提示',
        '确定要退出登录吗?',
        [
          {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: '确定', onPress: this.loginOut.bind(this)},
        ],
        { cancelable: false }
      )
    }
  }
  loginOut () {
    let _this = this
    storage.remove('signId').then(() =>{
      _this.props.navigation.navigate('Login')
    })
  }
  render() {
    const menus = [
      {icon: require('../images/user/user_nav_info.png'), name: '我的资料', path: 'UserInfo'},
      {icon: require('../images/user/user_nav_psw.png'), name: '修改密码', path: 'EditPsw'},
      {icon: require('../images/user/user_nav_out.png'), name: '退出登录', fn: true}
    ]
    const listItems = menus.map((item,index) => {
      return <TouchableOpacity key={index} onPress={this.clickMenu.bind(this, item)}>
                <View style={styles.menuItem}>
                    <Image
                        source={item.icon}
                        style={styles.menuImg}
                      />
                  <Text style={styles.menuTxt}>{item.name}</Text>
                  <Image
                      source={require('../images/arrow_right.png')}
                      style={styles.arrowRight}
                    />
                </View>
              </TouchableOpacity>
    });
    return (
      <View style={styles.container}>
        <View style={styles.userTop}>
          <Image
                source={require('../images/user/user_bg.png')}
                style={styles.banner}
              />
           <View style={styles.userWrap}>
              <Image
                source={require('../images/avatar/avatar1.png')}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.nameTxt}>范文</Text> 
                <Text style={styles.noTxt}>员工编号：10000</Text> 
              </View>
            
           </View>   
        </View>
        <View style={styles.menus}>
          {listItems} 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userTop: {
    position: 'relative'
  },
  userWrap: {
    position: 'absolute',
    bottom: rem(30),
    left: rem(30),
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  avatar: {
    width: rem(150),
    height: rem(150)
  },
  menus: {
    width: app.width,
    backgroundColor: '#fff',
    marginTop: rem(70)
  },
  menuItem: {
    height: rem(100),
    marginHorizontal: rem(20),
    borderBottomWidth: 1,
    paddingLeft: rem(10),
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowRight: {
    width: rem(18),
    height: rem(32)
  },
  menuImg: {
    width: rem(40),
    height: rem(40),
    marginRight: rem(50),
  },
  menuTxt: {
    fontSize: rem(32),
    color: '#333',
    flexGrow: 1,
  },
  banner: {
    width: app.width,
    height: rem(320),
    resizeMode: 'contain',
  },
  nameTxt: {
    color: '#fff',
    fontSize: rem(34),
  },
  noTxt:{
    color: '#fff',
    fontSize: rem(28),
  }
});
