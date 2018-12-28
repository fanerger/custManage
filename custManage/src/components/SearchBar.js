import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { rem } from '../config/style'
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ''
    }
  }
  searchHandle () {
    this.props.searchHandle(this.state.searchTxt)
  }
  render() {
    return (
      <View style={styles.searchContainer}>
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
          <TouchableOpacity onPress={this.searchHandle.bind(this)}>
            <Text style={styles.searchBtn}>搜索</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: rem(30),
    marginBottom: rem(20),
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
    flexGrow: 1,
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
  searchBtn: {
    marginLeft: rem(20),
    lineHeight: rem(60),
    backgroundColor: '#3a87f6',
    color: '#fff',
    fontSize: rem(24),
    width: rem(100),
    textAlign: 'center',
    borderTopLeftRadius: rem(10),
    borderBottomLeftRadius: rem(10),
    borderTopRightRadius: rem(10),
    borderBottomRightRadius: rem(10),
  }
});
