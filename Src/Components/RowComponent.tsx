import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode,
    styles?:StyleProp<ViewStyle>
}
const RowComponent = (props:Props) => {
    const {children,styles}=props
  return (
    <View style={[{flexDirection:'row',},styles]}>
      {props.children}
    </View>
  )
}

export default RowComponent