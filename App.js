import React, { Component } from 'react'
import { Constants } from 'expo'
import { View, StatusBar, StyleSheet } from 'react-native'
import { gray } from './src/utils/colors'
import Router from './Router'
import { setLocalNotification } from './src/utils/notifications'

const CustomStatusBar =  ({ backgroundColor, ...props }) =>
(
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor={gray} barStyle="light-content" />
      <Router />
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

