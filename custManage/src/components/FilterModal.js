import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { rem, app } from '../config/style'
export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      searchTxt: '',
      stars: '',
      status: '',
      starArr: [
        {stars: 0, text: '0星级', check: false},
        {stars: 1, text: '1星级', check: false},
        {stars: 2, text: '2星级', check: false},
        {stars: 3, text: '3星级', check: true},
        {stars: 4, text: '4星级', check: false},
        {stars: 5, text: '5星级', check: false},
      ],
      statusArr: [
        {status: 0, text: '待开发', check: false},
        {status: 1, text: '未了解', check: true},
        {status: 4, text: '已签单', check: false},
        {status: 2, text: '未上门待签约', check: false},
        {status: 3, text: '已上门待签约', check: false},
        {status: 7, text: '已放款', check: true},
        {status: 9, text: '垃圾单', check: false}
      ]
    }
  }
  // 选择状态
  checkStatus (index) {
    let statusArr = this.state.statusArr
    statusArr[index]['check'] = !this.state.statusArr[index]['check']
    this.setState({statusArr})
  }
  // 选择星级
  checkStar (index) {
    let starArr = this.state.starArr
    starArr[index]['check'] = !this.state.starArr[index]['check']
    this.setState({starArr})
  }
  // 重置
  reset () {
    let starArr = this.state.starArr.map((item) => {
      item['check'] = false
      return item
    })
    let statusArr = this.state.statusArr.map((item) => {
      item['check'] = false
      return item
    })
    this.setState({starArr, statusArr})
  }
  // 提交
  submit () {
    const {statusArr, starArr} = this.state
    let statusForm = []
    let starForm = []
    statusArr.forEach(item => {
      if (item.check) statusForm.push(item.status)
    })
    starArr.forEach(item => {
      if (item.check) starForm.push(item.stars)
    })
    console.log(statusForm)
    console.log(starForm)
    this.setState({btnLoading: true})
    setTimeout(() => {
      this.setState({btnLoading: false})
      this.props.closeModal()
    }, 3000)
  }
  render() {
    const {statusArr, starArr} = this.state
    const statusView = statusArr.map((item,index) => {
      return (
        <TouchableOpacity key={index} onPress={this.checkStatus.bind(this, index)}>
          <View style={styles.checkItem}>
            {item.check && <Text style={styles.checkedTxt}>{item.text}</Text>}
            {!item.check && <Text style={styles.checkTxt}>{item.text}</Text>}
            {item.check && <Image source={require('../images/icon_checked.png')} style={styles.iconCheck}/>}
          </View>
        </TouchableOpacity>
      )
    })
    const starView = starArr.map((item,index) => {
      return (
        <TouchableOpacity key={index} onPress={this.checkStar.bind(this, index)}>
          <View style={styles.checkItem}>
            {item.check && <Text style={styles.checkedTxt}>{item.text}</Text>}
            {!item.check && <Text style={styles.checkTxt}>{item.text}</Text>}
            {item.check && <Image source={require('../images/icon_checked.png')} style={styles.iconCheck}/>}
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert("请选关闭弹窗");
          }}
        >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={this.props.closeModal.bind(this)}>
          <View style={styles.nullDiv}></View>
          </TouchableOpacity>
          <View style={styles.modleContent}>
            <View>
            <View style={styles.searchWrap}>
              <Image
                source={require('../images/icon_search.png')}
                style={styles.iconSearch}
              />
              <TextInput
                style={styles.searchInput}
                placeholder='客户名/手机号'
                onChangeText={(searchTxt) => this.setState({searchTxt})}
                value={this.state.searchTxt}
              />
            </View>
              <Text style={styles.title}>跟进状态</Text>
              <View style={styles.checkWrap}>
                {statusView}
              </View>
              <Text style={styles.title}>客户星级</Text>
              <View style={styles.checkWrap}>
                {starView}
              </View>
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity onPress={this.reset.bind(this)}>
                <Text style={styles.btn}>重置</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.submit.bind(this)}>
                <Text style={[styles.btn, styles.rightBtn]}>{this.state.btnLoading ? '提交中...' : '确定'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  nullDiv: {
    flex: 1,
    width: rem(160),
    flexGrow: 1
  },
  modleContent:{
    flex: 1,
    width: rem(480),
    backgroundColor: '#fff',
    position: 'relative',
  },
  searchWrap: {
    flexDirection: 'row',
    height: rem(60),
    borderColor: '#dcdcdc',
    borderWidth: 1,
    alignItems: 'center',
    borderTopLeftRadius: rem(10),
    borderBottomLeftRadius: rem(10),
    borderTopRightRadius: rem(10),
    borderBottomRightRadius: rem(10),
    marginHorizontal: rem(30),
    marginTop: rem(40)
  },
  iconSearch: {
    width: rem(25),
    height: rem(25),
    marginHorizontal: rem(20)
  },
  searchInput: {
    height: rem(50),
    flexGrow: 1,
    fontSize: rem(26),
  },
  title: {
    marginHorizontal: rem(20),
    fontSize: rem(28),
    color: '#808080',
    borderColor: '#eee',
    lineHeight: rem(80),
    borderBottomWidth: 1,
  },
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: rem(20),
    justifyContent: 'space-around'
  },
  btnWrap: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  btn: {
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: rem(100),
    fontSize: rem(28),
    color: '#666',
    width: rem(240),
    backgroundColor: '#eeeeee'
  },
  rightBtn: {
    color: '#fff',
    backgroundColor: app.color
  },
  checkWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: rem(20),
  },
  checkItem: {
    marginBottom: rem(16),
    marginLeft: rem(30),
    position: 'relative'
  },
  checkTxt: {
    fontSize: rem(24),
    paddingVertical: rem(8),
    paddingHorizontal: rem(20),
    color: '#333',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: rem(6),
  },
  checkedTxt: {
    fontSize: rem(24),
    paddingVertical: rem(8),
    paddingHorizontal: rem(20),
    color: app.color,
    borderColor: app.color,
    borderWidth: 1,
    borderRadius: rem(6),
  },
  iconCheck: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: rem(33),
    height: rem(30)
  }
});
