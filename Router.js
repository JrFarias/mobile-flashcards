import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { gray, white } from './src/utils/colors'
import DeckList from './src/components/DeckList'
import NewDeck from './src/components/NewDeck'
import DeckDetails from './src/components/DeckDetails'
import AddCard from './src/components/AddCard'
import Quiz from './src/components/Quiz/Quiz'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  newDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Decks',
    }
  },
},
  {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: gray,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

const router = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray,
        height: 30,
      },
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray,
        height: 30,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: gray,
        height: 30,
      },
    },
  },
})

export default router
