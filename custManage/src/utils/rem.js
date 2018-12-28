import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

// 设计稿宽度（这里为640px），单位 px
const uiWidthPx = 640;
// px 转 dp（设计稿中的 px 转 rn 中的 dp）
const rem = (uiElePx) => {
  return Math.round(uiElePx * width / uiWidthPx);
}

export default rem
