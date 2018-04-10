import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList }  from 'react-native'
import { connect } from 'react-redux'
import { getAllDecks } from '../utils/storage'
import Deck from './Deck'
import { getDecks } from '../ducks'

class DeckList extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const { dispatch } = this.props

    getAllDecks()
    .then(decks => dispatch(getDecks(decks)))
    .then(() => this.setState({ isLoading: false }))
  }

  renderDeck = ({ item }) => (
    <View>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('DeckDetails', item)}
      >
        <Deck
          title={item.title}
          questions={item.questions}
        />
      </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <FlatList
        data={Object.values(this.props.decks)}
        renderItem={this.renderDeck}
        keyExtractor={(deck, index) => index.toString()}
      />
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(DeckList);
