import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { green, black, red } from '../../utils/colors'
import AfterQuiz from './AfterQuiz'
import QuestionLength from './QuestionLength'
import Question from './Question'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'

export default class Quiz extends Component {
  state = {
    questionIndex: 0,
    correctAnswers: 0,
    showAnswer: false,
  }

  startQuiz = () => {
    clearLocalNotification()
    .then(setLocalNotification)

    this.setState({
      questionIndex: 0,
      correctAnswers: 0,
      showAnswer: false
    })
  }


  correctHandler = () => {
    const { questionIndex, correctAnswers } = this.state

    this.setState({
      questionIndex: questionIndex + 1,
      correctAnswers: correctAnswers + 1,
      showAnswer: false
    })
  }

  backToDeck = () => {
    clearLocalNotification()
    .then(setLocalNotification)

    this.props.navigation.goBack()
  }

  incorrectHandler = () =>
    this.setState({
      questionIndex: this.state.questionIndex + 1
    })

  showAnswer = () =>
    this.setState({
      showAnswer: !this.state.showAnswer
    })

  buttonGroup = () => (
    <View style={styles.btnGroup}>
      <TouchableOpacity
        onPress={this.correctHandler}
        style={styles.btnCorrect}
      >
        <Text style={styles.btnText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={this.incorrectHandler}
        style={styles.btnIncorrect}
      >
        <Text style={styles.btnText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  )

  render() {
      const { questionIndex, correctAnswers, showAnswer } = this.state
      const { questions } = this.props.navigation.state.params
      const hasQuestions = questionIndex < questions.length

      return (
      <View style={styles.header}>
        {hasQuestions
        ? (
          <View style={styles.container}>
            <QuestionLength
              numberOfQuestions={questions.length}
              lastQuestion={questions.length - questionIndex}
            />
            <View style={styles.body}>
              {showAnswer
              ? <Question
                  question={questions[questionIndex].answer}
                  title='Show Question'
                  onPress={this.showAnswer}
                  color={green}
                />
              : <Question
                  question={questions[questionIndex].question}
                  title='Show Answer'
                  onPress={this.showAnswer}
                  color={red}
                />}
            </View>
            {this.buttonGroup()}
          </View>
          )
        : <AfterQuiz
            startQuiz={this.startQuiz}
            backToDeck={this.backToDeck}
            score={this.state.correctAnswers}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  body: {
    flex: 2
  },
  btnCorrect: {
    backgroundColor: green,
    padding: 10,
    height: 50,
    borderRadius: 20,
    borderColor: black,
    borderWidth: 2,
  },
  btnIncorrect: {
    backgroundColor: red,
    padding: 10,
    height: 50,
    borderRadius: 20,
    borderColor: black,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
  },
  btnGroup: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})


