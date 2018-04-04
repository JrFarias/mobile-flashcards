import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import DeckList from './src/components/DeckList'
import NewDeck from './src/components/NewDeck'
import { white, gray } from './src/utils/colors'

const CustomStatusBar =  ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  newDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Decks'
    }
  },
},
  {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: gray,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

export default class App extends Component {
  render() {
    return (
      <View  style={{ flex: 1 }}>
        <CustomStatusBar backgroundColor={gray} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
