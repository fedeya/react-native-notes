import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Formulario from "./components/Formulario";
import ListaNotas from "./components/ListaNotas";

class App extends Component {

  state = {
    notas: []
  }

  crearNota = (nota) => {
    let notas = [...this.state.notas];

    notas.push({
      id: `nota${Date.now()}`,
      texto: nota
    });
    
    this.setState({
      notas
    });

  }

  eliminarNota = (id) => {
    let notas = [...this.state.notas];
    notas = notas.filter(nota => nota.id !== id);
    this.setState({
      notas
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Formulario crearNota={this.crearNota} />
        <ListaNotas notas={this.state.notas} eliminarNota={this.eliminarNota} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    backgroundColor: '#343a40',
    alignItems: 'center',
  },
  prueba: {
    borderRadius: 100,
    color: "#000"
  }
});

export default App;