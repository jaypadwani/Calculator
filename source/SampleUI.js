import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './SampleUIStyle';
class SampleUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVar: 0,
      secondVar: 0,
      result: '',
    };
  }

  add = () => {
    this.setState({
      result: parseInt(this.state.firstVar) + parseInt(this.state.secondVar),
    });
  };

  subtract = () => {
    this.setState({
      result: parseInt(this.state.firstVar) - parseInt(this.state.secondVar),
    });
  };

  multiply = () => {
    this.setState({
      result: parseInt(this.state.firstVar) * parseInt(this.state.secondVar),
    });
  };

  divide = () => {
    this.setState({
      result: parseInt(this.state.firstVar) / parseInt(this.state.secondVar),
    });
  };

  reset = () => {
    this.setState({
      result: 0,
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.text}>Calculator</Text>

        <View style={styles.buttonView}>
          <TextInput
            keyboardType={'numeric'}
            onChangeText={text => this.setState({firstVar: text})}
            style={styles.numberText}
          />

          <TextInput
            keyboardType={'numeric'}
            onChangeText={texts => this.setState({secondVar: texts})}
            style={styles.numberText}
          />
        </View>

        <View style={styles.textInputStyle}>
          <TouchableOpacity onPress={this.add} style={styles.containerStyle}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.subtract}
            style={styles.containerStyle}>
            <Text style={styles.addText}> Subtract</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.TextView}>
          <TouchableOpacity
            onPress={this.multiply}
            style={styles.containerStyle}>
            <Text style={styles.addText}>Multiply</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.divide} style={styles.containerStyle}>
            <Text style={styles.addText}> Divide</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.reset} style={styles.resetStyle}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>

        <Text style={styles.btntext}>Result</Text>
        <Text style={styles.resultText}>{this.state.result}</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default SampleUI;
