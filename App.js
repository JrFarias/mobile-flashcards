import React, { Component } from 'react'
import { Constants } from 'expo'
import { View, StatusBar, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { gray } from './src/utils/colors'
import Router from './Router'
import { setLocalNotification } from './src/utils/notifications'
import reducer from './src/ducks'

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
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <CustomStatusBar backgroundColor={gray} barStyle="light-content" />
        <Router />
      </View>
    </Provider>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

