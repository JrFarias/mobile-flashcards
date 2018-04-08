import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { black, gray } from '../utils/colors'

const Deck = ({ title, questions }) => (
  <View style={styles.deck}>
    <View style={styles.deckSubtitle}>
      <Text style={styles.deckTitle}>{title}</Text>
      <Text style={styles.deckQuestion}>
          {questions && questions.length} cards
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: black,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  deckSubtitle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 24
  },
  deckQuestion: {
    fontSize: 18,
    color: gray
  }
});

export default Deck;
