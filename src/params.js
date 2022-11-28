import { Dimensions } from "react-native";

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Tamanho do header do jogo
  dofficultLevel: 0.1, // Percentual de blocos com minas,

  // Calculando quantidade de colunas
  getColumnsAmount() {
    const width = Dimensions.get("window").width;
    return Math.floor(width / this.blockSize);
  },

  // calculando quantidade de linhas
  getRowsAmount() {
    const totalHeight = Dimensions.get("window").height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
