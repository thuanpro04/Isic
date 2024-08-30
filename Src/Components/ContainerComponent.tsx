import {View, Text, StyleProp, ViewStyle, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import {appColors} from '../Theme/AppColors';
import {globalStyles} from '../Styles/globalStyle';
interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  isScroll?: boolean;
}
const ContainerComponent = (props: Props) => {
  const {children, styles, isScroll} = props;
  return isScroll ? (
    <ScrollView style={[globalStyles.container, styles]}>{children}</ScrollView>
  ) : (
    <View style={[globalStyles.container, styles]}>{children}</View>
  );
};

export default ContainerComponent;
