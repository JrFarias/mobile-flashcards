import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, black } from '../utils/colors';
import { getDeckByTitle } from '../utils/storage'

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  })

  render() {
    const { navigation } = this.props
    const title = this.props.navigation.state.params.title
    const questions = this.props.decks[title] && this.props.decks[title].questions

    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTitle}>{ title }</Text>
          <Text style={styles.containerSubTitle}>
            { questions && questions.length } cards
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnAddCard}
          onPress={() => navigation.navigate('AddCard', { title, questions })}
        >
          <Text style={styles.btnAddCardTitle}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnQuiz}
          onPress={() => navigation.navigate('Quiz', { title, questions })}
        >
          <Text style={styles.btnQuizTitle}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return { decks }
}

export default connect(mapStateToProps)(DeckDetails)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTitle: {
    fontSize: 40
  },
  containerSubTitle: {
    fontSize: 20,
    marginTop: 10
  },
  btnAddCard: {
    backgroundColor: white,
    margin: 24,
    padding: 10,
    borderRadius: 20,
    borderColor: black,
    borderWidth: 2,
    height: 45,
  },
  btnAddCardTitle: {
    color: black,
    fontSize: 22,
    textAlign: 'center',
  },
  btnQuiz: {
    backgroundColor: black,
    margin: 24,
    padding: 10,
    height: 45,
    borderRadius: 20,
    borderColor: white,
    borderWidth: 2,
  },
  btnQuizTitle: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});
