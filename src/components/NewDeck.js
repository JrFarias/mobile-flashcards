import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert }  from 'react-native'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'
import { addNewDeckStore } from '../utils/storage'
import { addNewDeck } from '../ducks'

class NewDeck extends Component {
  state = {
    text: '',
  }

  add = () => {
    const { decks } = this.props
    const { text } = this.state

    if (!text) {
      Alert.alert('Error', 'Deck name cannot be empty')
      return
    } else if (decks[text]) {
      Alert.alert('Error', 'Deck Already exists')
      return
    }

    this.props.dispatch(addNewDeck(text));

    addNewDeckStore(text)
    .then(() => {
      this.setState({ text: ''})

      Alert.alert(
      'Successful',
      'Deck added',
      [{
        text: 'OK',
        onPress: () => this.props.navigation.navigate('DeckDetails', { title: text })
      }])
    }
    )
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.text}>What is the title of your new deck ?</Text>
         <TextInput
          value={this.state.text}
          placeholder="Deck title"
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity
          onPress={this.add}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(NewDeck)

const styles = StyleSheet.create({
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
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})
