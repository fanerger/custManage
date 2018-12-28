import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { rem, app } from '../config/style'
export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLoading: false,
      orderId: '',
      stars: '',
      status: '',
      starArr: [
        {stars: 0, text: '0星:未知条件'},
        {stars: 1, text: '1星:无条件客户'},
        {stars: 2, text: '2星:有条件，暂时不能进件'},
        {stars: 3, text: '3星:有需求，待上门'},
        {stars: 4, text: '4星:一般资质客户'},
        {stars: 5, text: '5星:优质客户'},
      ],
      statusArr: [
        {status: 0, text: '待开发'},
        {status: 1, text: '未了解'},
        {status: 2, text: '未上门待签约'},
        {status: 3, text: '已上门待签约'},
        {status: 4, text: '已签单'},
        {status: 7, text: '已放款'},
        {status: 9, text: '垃圾单'}
      ]
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      stars: nextProps.billInfo.stars,
      status: nextProps.billInfo.status,
      orderId: nextProps.billInfo.orderId
    })
  }
  // 提交
  submit () {
    this.setState({btnLoading: true})
    toast('orderId' + this.state.orderId)
    setTimeout(() => {
      this.setState({btnLoading: false})
      this.props.closeModal()
      console.log(this.state.searchTxt)
    }, 3000)
  }
  render() {
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
            <View>
              <Text style={styles.title}>修改订单状态和星级:</Text>
              <View style={styles.pickerWrap}>
                <Picker
                  selectedValue={this.state.stars}
                  style={styles.pickerCss}
                  onValueChange={(itemValue, itemIndex) => this.setState({stars: itemValue})}>
                  {this.state.starArr.map((item,idx) => {
                    return <Picker.Item label={item.text} value={item.stars} key={idx}/>
                  })}
                </Picker>
              </View>
              <View style={styles.pickerWrap}>
                <Picker
                  selectedValue={this.state.status}
                  style={styles.pickerCss}
                  onValueChange={(itemValue, itemIndex) => this.setState({status: itemValue})}>
                  {this.state.statusArr.map((item,idx) => {
                    return <Picker.Item label={item.text} value={item.status} key={idx}/>
                  })}
                </Picker>
              </View>
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
  title: {
    marginHorizontal: rem(40),
    marginVertical: rem(40),
    fontSize: rem(30),
  },
  pickerWrap: {
    marginHorizontal: rem(40),
    borderColor: '#e5e5e5',
    borderWidth: 1,
    marginBottom: rem(50),
    fontSize: rem(28),
  },
  pickerCss: {
    height: rem(80),
  },
  textWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: rem(20),
    justifyContent: 'space-around'
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
