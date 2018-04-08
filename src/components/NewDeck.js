import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert }  from 'react-native';
import { white, black } from '../utils/colors';
import { getAllDecks, addNewDeck } from '../utils/storage'

export default class NewDeck extends Component {
  state = {
    text: '',
    decks: [],
    isLoading: true,
  }

  componentDidMount() {
    getAllDecks()
    .then(decks => this.setState({
        decks: Object.values(decks),
        isLoading: false,
      }))
  }

  add = () => {
    const { text, decks } = this.state

    if (!text) {
      Alert.alert('Error', 'Deck name cannot be empty')
    } else if (decks[text]) {
      Alert.alert('Error', 'Deck Already exists')
    }

    addNewDeck(text)
    .then(() => Alert.alert(
      'Successful',
      'Deck added',
      [{
        text: 'OK',
        onPress: () => this.props.navigation.navigate('DeckDetails', { title: text })
      }])
    )
  }

  render() {
    return (
      <View style={style.container}>
         <Text style={style.text}>What is the title of your new deck ?</Text>
         <TextInput
          value={this.state.text}
          placeholder="Deck title"
          style={style.input}
          onChangeText={text => this.setState({ text })}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity
          onPress={this.add}
          style={style.btn}
        >
          <Text style={style.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
    height: 44,
    padding: 8,
    borderWidth: 2,
    borderColor: black,
    borderRadius: 20,
    backgroundColor: white,
    margin: 24,
  },
  btn: {
    backgroundColor: black,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})
