import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class Formulario extends Component {

  state = {
    input: ""
  }

  agregarNota = () => {
    this.props.crearNota(this.state.input)
  }

  onInputChange = (e) => {
    this.setState({
      input: e.nativeEvent.text
    })
  }

  render(){
    return ( 
      <View style={styles.form}>
        <Text style={styles.title}>Anotador</Text>
        <TextInput placeholder="Nota" value={this.state.input} onChange={this.onInputChange} style={styles.input}></TextInput>
        <Button title="Crear Nota" onPress={this.agregarNota}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 50,
    borderRadius: 20,
    width: 400
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    fontSize: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    padding: 2
  }
});

export default Formulario;