import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.tittle}>Selecione o Nivel</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}
          >
            <Text>Facil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelected(0.2)}
          >
            <Text>Medio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}
          >
            <Text>Dificil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    coor: "#EEE",
    fontWeight: "bold",
  },
  bgEasy: {
    backgroundColor: "#49b65d",
  },
  bgNormal: {
    backgroundColor: "#2765f7",
  },
  bgHard: {
    backgroundColor: "#e26337",
  },
});
