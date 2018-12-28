import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BillItem from '../components/BillItem'
import SearchBar from '../components/SearchBar'
import EditForm from '../components/EditForm'
import EditStar from '../components/EditStar'
import { app, rem } from '../config/style'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showStarModal: false,
      orderId: '',
      billInfo: {}
    }
  }
  // 设置编辑模态框的显示隐藏
  setEditVisible(visible) {
    console.log('关闭')
    this.setState({ showEditModal: visible });
  }
  // 设置星级模态框的显示隐藏
  setStarVisible(visible) {
    console.log('关闭')
    this.setState({ showStarModal: visible });
  }
  // 搜索
  searchHandle (val) {
    console.log(val)
  }
  // 标星
  clickStar (item) {
    this.setState({billInfo: item}, () => {
      this.setStarVisible(true)
    })
  }
  // 去详情页
  clickDtl (orderId) {
    this.props.navigation.navigate('BillDtl', {orderId})
  }
  // 编辑
  clickEdit (item) {
    console.log(item)
    this.setState({orderId: item.orderId})
    this.setEditVisible(true)
  }
  render() {
    const lists = [
      {orderId: 1, realName: '张三', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '女', status: 0, telephone: '18398101098'},
      {orderId: 2, realName: '李四', stars: 3, allotTime: '2018-12-15 12:22:10', age: 30, sex: '男', status: 1, telephone: '10086'},
      {orderId: 3, realName: '王五', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '', status: 2, telephone: '10086'},
      {orderId: 4, realName: '马六', stars: 0, allotTime: '2018-12-15 12:22:10', age: 56, sex: '男', status: 3, telephone: '10086'},
      {orderId: 1, realName: '张三', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '女', status: 0, telephone: '18398101098'},
      {orderId: 2, realName: '李四', stars: 3, allotTime: '2018-12-15 12:22:10', age: 30, sex: '男', status: 1, telephone: '10086'},
      {orderId: 3, realName: '王五', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '', status: 2, telephone: '10086'},
      {orderId: 4, realName: '最后一个', stars: 0, allotTime: '2018-12-15 12:22:10', age: 56, sex: '男', status: 3, telephone: '10086'},
    ]
    return (
      <ScrollView style={styles.container}>
        <SearchBar searchHandle={this.searchHandle.bind(this)}/>
        {lists.map((item,index) => {
          return <BillItem key={index} item={item} clickDtl={this.clickDtl.bind(this, item.orderId)} editHandle={this.clickEdit.bind(this, item)} starHandle={this.clickStar.bind(this, item)}/>
        })}
        <EditForm
          orderId={this.state.orderId}
          modalVisible={this.state.showEditModal}
          closeModal={this.setEditVisible.bind(this, false)}
        />
        <EditStar
          billInfo={this.state.billInfo}
          modalVisible={this.state.showStarModal}
          closeModal={this.setStarVisible.bind(this, false)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rem(60),
    paddingBottom: rem(260),
    backgroundColor: '#fff',
  }
});
