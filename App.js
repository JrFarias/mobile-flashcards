import React from 'react'
import { Constants } from 'expo'
import { View, StatusBar } from 'react-native'
import { gray } from './src/utils/colors'
import Router from './Router'

const CustomStatusBar =  ({ backgroundColor, ...props }) =>
(
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const App = () =>
(
  <View style={{ flex: 1 }}>
    <CustomStatusBar backgroundColor={gray} barStyle="light-content" />
    <Router />
  </View>
)

export default App
