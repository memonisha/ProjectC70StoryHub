import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WriteScreen</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputBox}
            placeholder='Write Here'
            multiline
            editable
          />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, inputView: {
    flexDirection: 'row',
    margin: 20,
  },
  inputBox: {
    width: 300,
    height: 300,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  submitButton: {
    backgroundColor: "#008b8b",
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});