import React from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import BillItem from '../../components/BillItem'
import EditForm from '../../components/EditForm'
import EditStar from '../../components/EditStar'
import FilterModal from '../../components/FilterModal'
import { app, rem } from '../../config/style'
export default class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '订单列表',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: rem(32),
      },
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('navRightBtn')}>
        <View style={styles.navBtnWrap}>
           <Image
              source={require('../../images/icon_filter.png')}
              style={styles.iconFilter}
            />
          <Text style={styles.navBtn}>筛选</Text>
        </View>
        </TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showStarModal: false,
      showFilterModal: false,
      orderId: '',
      billInfo: {}
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ navRightBtn: this._navRightBtn });
  }
  _navRightBtn = () => {
    this.setFilterVisible(true)
  }
  // 设置编辑模态框的显示隐藏
  setEditVisible(visible) {
    this.setState({ showEditModal: visible });
  }
  // 设置星级模态框的显示隐藏
  setStarVisible(visible) {
    this.setState({ showStarModal: visible });
  }
  // 筛选模态框的显示隐藏
  setFilterVisible(visible) {
    this.setState({ showFilterModal: visible });
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
  render() {
    const lists = [
      {orderId: 1, realName: '张三', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '女', status: 0, telephone: '18398101098'},
      {orderId: 2, realName: '李四', stars: 3, allotTime: '2018-12-15 12:22:10', age: 30, sex: '男', status: 1, telephone: '10086'},
      {orderId: 3, realName: '王五', stars: 1, allotTime: '2018-12-15 12:22:10', age: 20, sex: '', status: 2, telephone: '10086'},
      {orderId: 4, realName: '马六', stars: 0, allotTime: '2018-12-15 12:22:10', age: 56, sex: '男', status: 3, telephone: '10086'}
    ]
    return (
      <ScrollView style={styles.container}>
        {lists.map((item,index) => {
          return <BillItem key={index} item={item} editHandle={this.clickEdit.bind(this, item)} starHandle={this.clickStar.bind(this, item)}/>
        })}
        <FilterModal modalVisible={this.state.showFilterModal} closeModal={this.setFilterVisible.bind(this, false)}/>
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
    paddingTop: rem(20),
    backgroundColor: '#fff',
  },
  navBtnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rem(30),
  },
  iconFilter: {
    width: rem(26),
    height: rem(24)
  },
  navBtn: {
    color: '#4d4d4d',
    fontSize: rem(26),
    marginLeft: rem(4),
  }
});
