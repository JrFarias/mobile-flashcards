import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList }  from 'react-native';
import { getAllDecks } from '../utils/storage'
import Deck from './Deck'

export default class DeckList extends Component {
  state = {
    decks: [],
    isLoading: true
  }

  componentDidMount() {
    getAllDecks()
    .then(decks => this.setState({
      decks: Object.values(decks),
      isLoading: false
    }))
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
  );

  render() {
    return (
      <FlatList
        data={this.state.decks}
        renderItem={this.renderDeck}
        keyExtractor={(deck, index) => index.toString()}
      />
    );
  }
}
