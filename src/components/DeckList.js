import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList }  from 'react-native';
import { getAllDecks } from '../utils/storage'

export default class DeckList extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    getAllDecks()
    .then(decks => this.setState({
      decks,
      isLoading: false
    }))
  }

  renderDeck = ({ deck }) => (
    <View>
      <TouchableOpacity>
        <Text>{deck.title}</Text>
        <Text>{deck.questions}</Text>
      </TouchableOpacity>
    </View>
);

  render() {
    return (
      <View>
        <FlatList
          data={Object.values(this.state.decks).sort((a, b) => a.title > b.title)}
          renderItem={this.rendeDeck}
          keyExtractor={(deck, index) => index}
        />
      </View>
    );
  }
}
