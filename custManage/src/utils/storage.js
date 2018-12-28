// 存储的简单封装
import { AsyncStorage } from 'react-native';
 export default class DeviceStorage{
     static getItem(key) {
        return AsyncStorage.getItem(key).then((value) => {
            if (value !== null) {
                return value;
            }
            return null;
        });
      }
      static setItem(key, value) {
          return AsyncStorage.setItem(key, value);
      }
      static remove(key) {
          return AsyncStorage.removeItem(key);
      }
 }
 