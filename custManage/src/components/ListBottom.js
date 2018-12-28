import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { rem } from '../config/style'
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {this.props.listLoading && <Image
          source={require('../images/loading.gif')}
          style={styles.loadingGif}
        />}
        {this.props.isOver && <Text style={styles.loadingTxt}>没有更多了</Text>}
        {this.props.noResult && <View style={styles.noResultW}>
          <Image
            source={require('../images/no_result.png')}
            style={styles.noResult}
          />
          <Text style={styles.noTxt}>暂无订单~</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingTxt: {
    textAlign: 'center',
    lineHeight: rem(80),
    color: '#666'
  },
  noResultW: {
    paddingTop: rem(50),
  },
  noResult: {
    width: rem(330),
    height: rem(188),
    marginLeft: rem(126),
  },
  noTxt: {
    textAlign: 'center',
    lineHeight: rem(80),
    color: '#ccc'
  },
  loadingGif: {
    width: rem(50),
    height: rem(50),
    marginLeft: rem(295)
  }
});
