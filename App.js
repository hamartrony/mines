import React, { Component } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import MineField from "./src/components/MineField";
import {
  cloneBoard,
  createMineBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame,
} from "./src/functions";
import params from "./src/params";
import Level from "./src/screens/Level";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmout = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.dofficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmout()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("perdeu");
    }
    if (won) {
      Alert.alert("parabens");
    }

    this.setState({ board, lost, won });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    if (won) {
      Alert.alert("parabens");
    }

    this.setState({ board, won });
  };

  onLevelSelected = (level) => {
    params.dofficultLevel = level;
    this.setState(this.createState);
  };
  render() {
    return (
      <View style={styles.container}>
        <Level
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />

        <Header
          flagsLeft={this.minesAmout() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />

        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
