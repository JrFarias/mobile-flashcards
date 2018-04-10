import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import { addQuestionStore } from '../utils/storage'
import { white, black } from '../utils/colors'
import { addQuestion } from '../ducks'
class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  submitQuestion = () => {
    let alert = {}
    const { question, answer } = this.state
    const { title, questions } = this.props.navigation.state.params

    if (!question) {
      Alert.alert('Error', 'Question cannot be empty')
      return
    }

    if (!answer) {
      Alert.alert('Error', 'Answer cannot be empty')
      return
    }

    const params = {
      title,
      questions,
      newQuestion: {
        question,
        answer,
      },
    }

    this.props.dispatch(addQuestion(params))

    addQuestionStore(params)
    .then(() => {
      this.setState({ question: '', answer: ''})

      Alert.alert(
      'Successful',
      'Question Added Successfully',
      [{ text: 'OK', onPress: () => this.props.navigation.goBack() }],)
    })


  }

  render() {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Question is</Text>
        <TextInput
          defaultValue="Question"
          value={question}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          underlineColorAndroid='transparent'
        />

        <Text style={styles.text}>Answer is</Text>
        <TextInput
          defaultValue="Answer"
          value={answer}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity
          onPress={this.submitQuestion}
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

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  text: {
    fontSize: 40,
    textAlign: 'center'
  },
  input: {
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
