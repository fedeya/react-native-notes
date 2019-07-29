import React, { Component } from "react";
import { StyleSheet ,View } from "react-native";
import Nota from "./Nota";

class ListaNotas extends Component {
  render(){

    const { notas } = this.props

    return (
      <View style={styles.lista}>
        {
          notas.map((nota, i) => (
            <Nota nota={nota} key={i} eliminarNota={this.props.eliminarNota} />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lista: {
    borderRadius: 20,
    alignItems: "center",
  }
})

export default ListaNotas;