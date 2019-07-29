import React, { Component } from "react";
import { StyleSheet ,View, Text } from "react-native";

class Nota extends Component{

  eliminarNota = () => {
    this.props.eliminarNota(this.props.nota.id)
  }


  render(){

    const { texto } = this.props.nota;

    return(
      <View style={styles.nota} onTouchEnd={this.eliminarNota}>
        <Text>{texto}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nota: {
    padding: 15,
    fontSize: 10,
    backgroundColor: "#ffffff",
    width: 400,
    marginTop: 10,
    borderRadius: 20
  }
});

export default Nota;