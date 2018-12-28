import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { rem, app } from '../config/style'
export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: '',
      btnLoading: false,
      texts: ['过期','关机','拒绝','未接听','空号','不方便','犹豫中','不需要','异地','非本人','无条件','同行','黑户', '预约其他时间', '其他']
    }
  }
  // 点击预选文本
  checkTxt (val) {
    let txt = this.state.searchTxt + val + ','
    this.setState({searchTxt: txt})
  }
  // 提交
  submit () {
    this.setState({btnLoading: true})
    toast('orderId' + this.props.orderId)
    setTimeout(() => {
      this.setState({btnLoading: false})
      this.props.closeModal()
      console.log(this.state.searchTxt)
    }, 3000)
  }
  render() {
    const txtList = this.state.texts.map((item, index) => {
      return (
        <TouchableOpacity onPress={this.checkTxt.bind(this, item)} key={index}>
          <Text style={styles.txtItem}>{item}</Text>
        </TouchableOpacity>
      )
    })
    return (
      <Modal
          animationType="none"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert("请选关闭弹窗");
          }}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modleContent}>
            <TextInput
              multiline={true}
              style={styles.input}
              placeholder='添加订单跟进信息描述...'
              onChangeText={(searchTxt) => this.setState({searchTxt})}
              value={this.state.searchTxt}
            />
            <View style={styles.textWrap}>
              {txtList}
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity onPress={this.props.closeModal.bind(this)}>
                <Text style={styles.btn}>取消</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modleContent:{
    borderRadius: rem(10),
    width: rem(490),
    backgroundColor: '#fff',
  },
  input: {
    height: rem(140),
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginTop: rem(30),
    marginHorizontal: rem(35),
    padding: rem(10),
    borderRadius: rem(4),
    textAlignVertical: 'top'
  },
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: rem(20),
    justifyContent: 'space-around'
  },
  txtItem: {
    fontSize: rem(24),
    lineHeight: rem(42),
    marginRight: rem(10),
    marginBottom: rem(18),
    paddingHorizontal: rem(20),
    backgroundColor: '#f7f7f7',
    color: '#333'
  },
  btnWrap: {
    flexDirection: 'row',
    paddingVertical: rem(5),
    backgroundColor: '#f6f6f6',
    borderBottomRightRadius: rem(10),
    borderBottomLeftRadius: rem(10),
  },
  btn: {
    flexGrow: 1,
    textAlign: 'center',
    lineHeight: rem(70),
    width: rem(244),
  },
  rightBtn: {
    color: app.color,
    borderColor: '#e5e5e5',
    borderLeftWidth: 1,
  }
});
