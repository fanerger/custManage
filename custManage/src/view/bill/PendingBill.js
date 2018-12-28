import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import BillItem from '../../components/BillItem'
import SearchBar from '../../components/SearchBar'
import EditForm from '../../components/EditForm'
import EditStar from '../../components/EditStar'
import ListBottom from '../../components/ListBottom'
import { app, rem } from '../../config/style'
export default class PendingBill extends React.Component {
  static navigationOptions = {
    title: '订单列表',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: rem(32),
      },
  };
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showStarModal: false,
      orderId: '',
      billInfo: {},
      refreshing: false,
      noResult: false,
      listLoading: false,
      isOver: false,
      lists: []
    }
    this.currentPage = 1
    this.everyPage = 6
  }
  componentDidMount () {
    this.queryList()
  }
  // 设置编辑模态框的显示隐藏
  setEditVisible(visible) {
    this.setState({ showEditModal: visible });
  }
  // 设置星级模态框的显示隐藏
  setStarVisible(visible) {
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
  // 编辑
  clickEdit (item) {
    console.log(item)
    this.setState({orderId: item.orderId})
    this.setEditVisible(true)
  }
  renderItem = ({item, index}) => (
    <BillItem key={index} item={item} editHandle={this.clickEdit.bind(this, item)} starHandle={this.clickStar.bind(this, item)}/>
  )
  // 脚部组建
  ListFooterComponent = () => (
    <ListBottom listLoading={this.state.listLoading} isOver={this.state.isOver} noResult={this.state.noResult}/>
  )
  // 下拉刷新
  handleRefresh () {
    this.setState({refreshing: true})
    this.currentPage = 1
    this.setState({isOver: false, lists: []})
    this.queryList()
    setTimeout(() => {
      this.setState({refreshing: false})
    }, 1000)
  }
  // 上拉加载
  handleLoadMore () {
    if (!this.state.isOver && !this.state.listLoading) {
      this.currentPage++
      this.queryList()
    }
  }
  // 查询列表
  queryList () {
    this.setState({listLoading: true})
    request({
      url: '/app/order/getOrderList',
      data: {everyPage: this.everyPage, currentPage: this.currentPage},
      success: res => {
        console.log(res)
        let lists = this.state.lists.concat(res.rows)
        this.setState({lists, listLoading: false})
        // 暂无数据
        if (res.totalRecords === 0) {
          this.setState({noResult: true})
        } else {
          // 加载完所有数据
          if (res.totalPage === res.currentPage) {
            this.setState({isOver: true})
          }
        }
      },
      fail: err => {
        this.setState({listLoading: false})
        toast(err.message)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar searchHandle={this.searchHandle.bind(this)}/>
        <FlatList
          data={this.state.lists}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
          onEndReached={this.handleLoadMore.bind(this)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.ListFooterComponent}
        />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rem(20),
    backgroundColor: '#fff',
  }
});
