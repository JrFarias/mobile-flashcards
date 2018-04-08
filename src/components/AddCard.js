import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addQuestion } from '../utils/storage';
import { white, black } from '../utils/colors'
export default class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  submitQuestion = () => {
    let alert = {};
    const { question, answer } = this.state;
    const { title, questions } = this.props.navigation.state.params;

    if (question === '') {
      Alert.alert('Error', 'Question cannot be empty');
      return;
    }

    if (answer === '') {
      Alert.alert('Error', 'Answer cannot be empty');
      return;
    }

    const params = {
      title,
      newQuestion: {
        question,
        answer,
      },
    };

    addQuestion(params)
    .then(() => Alert.alert(
      'Successful',
      'Question Added Successfully',
      [{ text: 'OK', onPress: () => this.props.navigation
        .navigate('DeckDetails', { title }) }],
    ))
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={style.container}>
        <Text style={style.text}>Question is</Text>
        <TextInput
          defaultValue="Question"
          value={question}
          style={style.input}
          onChangeText={question => this.setState({ question })}
          underlineColorAndroid='transparent'
        />

        <Text style={style.text}>Answer is</Text>
        <TextInput
          defaultValue="Answer"
          value={answer}
          style={style.input}
          onChangeText={answer => this.setState({ answer })}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity
          onPress={this.submitQuestion}
          style={style.btn}>
          <Text style={style.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
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
});
