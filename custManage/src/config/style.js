// 样式常量
import { Dimensions } from 'react-native';
import rem from '../utils/rem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const app = {
    color: '#6276f8',
    width,
    height,
    padding: width/30
}

export { app, rem };
