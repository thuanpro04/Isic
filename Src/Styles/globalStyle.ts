import {StatusBar, StyleSheet} from 'react-native';
import { appColors } from '../Theme/AppColors';
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:26,
    backgroundColor:appColors.background
  },
  buttonStyles: {},
  row:{
    flexDirection:'row'
  }
});
export {globalStyles};
